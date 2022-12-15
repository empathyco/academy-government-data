import pandas as pd
import numpy as np

# Importar tabla CNAE
cnae = pd.read_csv('/Users/enriquecarnerofernandez/Documents/BDNS/raw_data/estructura_cnae2009.tsv',
                   sep = '\t',
                   index_col = False).iloc[:,:3]

# Cambiar nombre columnas
cnae.rename(columns = {'COD_CNAE2009':'cnae',
                       'CODINTEGR':'codigo',
                       'TITULO_CNAE2009':'titulo'},
            inplace = True)

# Crear columnas niveles y reordenar columnas
cnae['grupo'] = np.nan
cnae['subgrupo'] = np.nan
cnae['nivel'] = np.nan
cnae['subnivel'] = np.nan

cnae = cnae[['codigo',
             'cnae',
             'grupo',
             'subgrupo',
             'nivel',
             'subnivel',
             'titulo']]

cnae.columns

# Rellenar nuevas columnas
for i in range(1,5):
    cnae[cnae.cnae.str.len() == i] = cnae[cnae.cnae.str.len() == i].fillna(axis = 1,
                                                                           method = 'bfill')
    cnae.iloc[:,(i+1)].fillna(method = 'ffill',
                              inplace = True)

# Cambiar formato títulos
#cnae.titulo[cnae.cnae.str.len() <= 2] = cnae.titulo[cnae.cnae.str.len() <= 2].str.upper()

# Formato final y exportación
cnae = cnae[cnae.cnae.str.len() == 4]

cnae = cnae[['codigo',
             'grupo',
             'subgrupo',
             'nivel',
             'subnivel']]

cnae.to_csv('/Users/enriquecarnerofernandez/Documents/BDNS/cured_data/cnae.tsv',
            sep = '\t',
            index = False)