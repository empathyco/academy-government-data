import csv
import json
import pandas as pd


def parseTsv():

    try:
        print("Parsing TSV to JSON")
        reader = csv.DictReader(open('../../data-plugin/datos_limpios/concesiones_completo1.tsv'), delimiter="\t")

        with open("jsonOutput.json", 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))

        print("Parsing done")

        print("Fixing total imports")
        df = pd.read_json(r'jsonOutput.json')
        df["importe_total"].map(lambda x: float(x))
        print("Imports fixed")
        df.to_json(r'jsonOutput.json', orient='records')
        print("JSON wrote out")

    except:
        print("Error with the route, please try again")

def parserInterface():

    parseTsv()


if __name__ == "__main__":
    parserInterface()