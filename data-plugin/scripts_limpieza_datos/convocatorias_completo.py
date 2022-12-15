import pandas as pd

# Cargar datos originales
convocatorias = pd.read_csv('convocatoriasINDEX.csv',
                            header = 1)
convocatorias_crawler = pd.read_csv('convocatorias_crawler.tsv',
                                    sep = '\t',
                                    index_col=False)

# Fusionar datos
convocatorias_completo = pd.merge(convocatorias,
                                  convocatorias_crawler,
                                  on = 'codigo_bdns',
                                  how = 'right').iloc[:,:13]

# MRR a booleano
convocatorias_completo.MRR = convocatorias_completo.MRR.map({'SI': True, 'NO': False})

# Cambiar formato importe
convocatorias_completo.importe_total = pd.to_numeric(convocatorias_completo.importe_total.str.replace(',','').str[:-2])

# Cambiar formato región
convocatorias_completo['NUTS'] = ''
convocatorias_completo.NUTS = convocatorias_completo.región_impacto.str.split(' - ').str[0]
convocatorias_completo.región_impacto = convocatorias_completo.región_impacto.str.split(' - ').str[1]

# Exportar datos
convocatorias_completo.to_csv('convocatorias_completo.tsv',
                              index = False,
                              sep = '\t')





