from urllib import request
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import pandas as pd
import ssl

def complete_bdns_mk3(original_data):
    indice = list(original_data.index)
    crawled_data = list(original_data.codigo_bdns)
    
    no_encontrado = []
    
    headers = 'codigo_bdns;importe_total;tipo_beneficiario;sector_beneficiario;región_impacto;finalidad'
    
    with open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/prueba.csv','a') as csv_file:
        csv_file.write(headers + '\n')
        csv_file.close()

    for i in indice:
        # Allows the crawler to conect to the web page
        ssl._create_default_https_context = ssl._create_unverified_context
        
        url = 'https://www.pap.hacienda.gob.es/bdnstrans/GE/es/convocatoria/' + str(crawled_data[i])
        
        convocatoria = ''

        try:
           rawpage = request.urlopen(url) # Open the url
        except HTTPError as err:
           if err.code == 404:
               no_encontrado.append(crawled_data[i])
               
        else:
            convocatoria += str(crawled_data[i]) + ';'

            # Parsing to html
            soupedpage = BeautifulSoup(rawpage, "html5lib")

            #Extract only the article of the page
            contenido = soupedpage.article
            
            # Assigning values
            bloques = contenido.find_all('div', attrs = 'bloque')
            
            importe_total = bloques[7]
            if importe_total.find('p') is None:
                convocatoria += 'NaN' + ';'
            else:
                convocatoria += str(importe_total.find('p').get_text()) + ';'

            tipo_beneficiario = bloques[10]
            if tipo_beneficiario.find('li') is None:
                convocatoria += 'NaN' + ';'
            else:
                convocatoria += str(tipo_beneficiario.find('li').get_text()) + ';'

            sector_beneficiario = bloques[11]
            if sector_beneficiario.find('li') is None:
                convocatoria += 'NaN' + ';'
            else:
                convocatoria += str(sector_beneficiario.find('li').get_text()).replace(';','-') + ';'

            region_impacto = bloques[12]
            if region_impacto.find('li') is None:
                convocatoria += 'NaN' + ';'
            else:
                convocatoria += str(region_impacto.find('li').get_text()) + ';'

            finalidad = bloques[13]
            if finalidad.find('p') is None:
                convocatoria += 'NaN' + ';'
            else:
                convocatoria += str(finalidad.find('p').get_text()) + ';'
            
            with open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/prueba.csv','a') as csv_file:
                csv_file.write(convocatoria +'\n')
                csv_file.close()

        if i % 100 == 0:
            print(round(i / len(indice) * 100, 2), '%')




complete_bdns_mk3(convocatorias)