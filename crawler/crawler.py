from urllib import request
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import pandas as pd
import ssl

def complete_bdns_mk2(original_data):
    
    no_encontrado = []
    indice = list(original_data.index)
    
    crawled_data = pd.DataFrame(original_data.codigo_bdns)
    crawled_data['importe_total'] = ''
    crawled_data['tipo_beneficiario'] = ''
    crawled_data['sector_beneficiario'] = ''
    crawled_data['region_impacto'] = ''
    crawled_data['finalidad'] = ''

    for i in indice:
        # Allows the crawler to conect to the web page
        ssl._create_default_https_context = ssl._create_unverified_context
        
        url = 'https://www.pap.hacienda.gob.es/bdnstrans/GE/es/convocatoria/' + str(crawled_data.codigo_bdns[i])
        
        try:
           rawpage = request.urlopen(url) # Open the url
        except HTTPError as err:
           if err.code == 404:
               no_encontrado.append(crawled_data.codigo_bdns[i])
               
        else:
            # Parsing to html
            soupedpage = BeautifulSoup(rawpage, "html5lib")

            #Extract only the article of the page
            contenido = soupedpage.article
            
            # Assigning values
            bloques = contenido.find_all('div', attrs = 'bloque')
            
            importe_total = bloques[7]
            if importe_total.find('p') is None:
                crawled_data.importe_total[i] = 'NaN'
            else:
                crawled_data.importe_total[i] = importe_total.find('p').get_text()
            
            tipo_beneficiario = bloques[10]
            if tipo_beneficiario.find('li') is None:
                crawled_data.tipo_beneficiario[i] = 'NaN'
            else:
                crawled_data.tipo_beneficiario[i] = tipo_beneficiario.find('li').get_text()
                
            sector_beneficiario = bloques[11]
            if sector_beneficiario.find('li') is None:
                crawled_data.sector_beneficiario[i] = 'NaN'
            else:
                crawled_data.sector_beneficiario[i] = sector_beneficiario.find('li').get_text()
            
            region_impacto = bloques[12]
            if region_impacto.find('li') is None:
                crawled_data.region_impacto[i] = 'NaN'
            else:
                crawled_data.region_impacto[i] = region_impacto.find('li').get_text()
            
            finalidad = bloques[13]
            if finalidad.find('p') is None:
                crawled_data.finalidad[i] = 'NaN'
            else:
                crawled_data.finalidad[i] = finalidad.find('p').get_text()

        if i % 100 == 0:
            print(round(i / len(crawled_data.index) * 100, 2), '%')
    
    return crawled_data, no_encontrado

crawled_data, no_encontrado = complete_bdns_mk2(datos)