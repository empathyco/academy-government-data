import csv
import json
import gzip
import shutil

def parseTsv():

    try:
        with gzip.open('/Users/albertodiezbajo/Downloads/Empathy Projects/data-plugin/datos_limpios/convocatorias_completo.tsv.gz', 'rb') as f_in:
            with open('/Users/albertodiezbajo/Downloads/Empathy Projects/data-plugin/datos_limpios/convocatorias_completo_adicional.tsv', 'wb') as f_out:
                shutil.copyfileobj(f_in, f_out)
        reader = csv.DictReader(open('/Users/albertodiezbajo/Downloads/Empathy Projects/data-plugin/datos_limpios/convocatorias_completo_adicional.tsv'), delimiter="\t")

        with open("jsonOutput.json", 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))
    except:
        print("Error with the route, please try again")

def parserInterface():
    #tsvRoute = ""

    #while (tsvRoute == ""):
    #    tsvRoute = input("Enter a suitable route for the TSV file:\n")

    parseTsv()


if __name__ == "__main__":
    parserInterface()