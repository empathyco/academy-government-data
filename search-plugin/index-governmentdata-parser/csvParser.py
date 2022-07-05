import csv
import json
import sys


def parseTsv():

    try:
        reader = csv.DictReader(open('../../data-plugin/datos_limpios/convocatorias_completo.tsv'), delimiter="\t")

        with open("jsonOutput.json", 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))
    except:
        print("Error with the route, please try again")

def parserInterface():

    parseTsv()


if __name__ == "__main__":
    parserInterface()