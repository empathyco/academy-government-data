from urllib import request
from bs4 import BeautifulSoup
from urllib.error import HTTPError
import pandas as pd
import ssl

def complete_bdns(original_data):
    indice = list(original_data.index)
    crawled_data = list(original_data.codigo_bdns)
    
    no_encontrado = ''
    
    headers = ('codigo_bdns' + '\t' +
               'importe_total' + '\t' +
               'tipo_beneficiario' + '\t' +
               'sector_beneficiario' + '\t' +
               'región_impacto' + '\t' +
               'finalidad')
    
    tsv_1 = open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/concesiones.tsv','a')
    tsv_1.write(headers + '\n')

    for i in indice:
        # Allows the crawler to conect to the web page
        ssl._create_default_https_context = ssl._create_unverified_context
        
        url = 'https://www.pap.hacienda.gob.es/bdnstrans/GE/es/convocatoria/' + str(crawled_data[i])
        
        convocatoria = ''

        try:
           rawpage = request.urlopen(url) # Open the url
           
        except HTTPError as err:
           if err.code == 404:
               no_encontrado = str(crawled_data[i])
               
               with open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/no_encontrados2.tsv','a') as tsv_2:
                   tsv_2.write(no_encontrado +'\n')
                   tsv_2.close()
                   
        else:
            convocatoria += str(crawled_data[i]) + '\t'

            # Parsing to html
            soupedpage = BeautifulSoup(rawpage, "html5lib")

            #Extract only the article of the page
            contenido = soupedpage.article
            
            # Assigning values
            bloques = contenido.find_all('div', attrs = 'bloque')
            
            importe_total = bloques[7]
            if importe_total.find('p') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(importe_total.find('p').get_text()) + '\t'

            tipo_beneficiario = bloques[10]
            if tipo_beneficiario.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(tipo_beneficiario.find('li').get_text()) + '\t'

            sector_beneficiario = bloques[11]
            if sector_beneficiario.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(sector_beneficiario.find('li').get_text()) + '\t'

            region_impacto = bloques[12]
            if region_impacto.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(region_impacto.find('li').get_text()) + '\t'

            finalidad = bloques[13]
            if finalidad.find('p') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(finalidad.find('p').get_text()) + '\t'
            
            tsv_1.write(convocatoria +'\n')

        if i % 10000 == 0:
            print(round(i / len(indice) * 100, 2), '%')
            
    tsv_1.close()

complete_bdns(concesiones)




def complete_bdns_concesiones(original_data):
    indice = list(original_data.index)
    crawled_data = list(original_data.codigo_bdns)
    
    no_encontrado = ''
    
    headers = ('id' + '\t' +
               'codigo_bdns' + '\t' +
               'importe_total' + '\t' +
               'tipo_beneficiario' + '\t' +
               'sector_beneficiario' + '\t' +
               'región_impacto' + '\t' +
               'finalidad')
    
    tsv_1 = open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/concesiones.tsv','a')
    tsv_1.write(headers + '\n')

    for i in indice:
        # Allows the crawler to conect to the web page
        ssl._create_default_https_context = ssl._create_unverified_context
        
        url = 'https://www.pap.hacienda.gob.es/bdnstrans/GE/es/convocatoria/' + str(crawled_data[i])
        
        convocatoria = ''

        try:
           rawpage = request.urlopen(url) # Open the url
           
        except HTTPError as err:
           if err.code == 404:
               no_encontrado = str(crawled_data[i])
               
               with open('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/no_encontrados2.tsv','a') as tsv_2:
                   tsv_2.write(no_encontrado +'\n')
                   tsv_2.close()
                   
        else:
            convocatoria += str(i) + '\t' + str(crawled_data[i]) + '\t'

            # Parsing to html
            soupedpage = BeautifulSoup(rawpage, "html5lib")

            #Extract only the article of the page
            contenido = soupedpage.article
            
            # Assigning values
            bloques = contenido.find_all('div', attrs = 'bloque')
            
            importe_total = bloques[7]
            if importe_total.find('p') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(importe_total.find('p').get_text()) + '\t'

            tipo_beneficiario = bloques[10]
            if tipo_beneficiario.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(tipo_beneficiario.find('li').get_text()) + '\t'

            sector_beneficiario = bloques[11]
            if sector_beneficiario.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(sector_beneficiario.find('li').get_text()) + '\t'

            region_impacto = bloques[12]
            if region_impacto.find('li') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(region_impacto.find('li').get_text()) + '\t'

            finalidad = bloques[13]
            if finalidad.find('p') is None:
                convocatoria += 'NaN' + '\t'
            else:
                convocatoria += str(finalidad.find('p').get_text()) + '\t'
            
            tsv_1.write(convocatoria +'\n')

        if i % 10000 == 0:
            print(round(i / len(indice) * 100, 2), '%')
            
    tsv_1.close()
