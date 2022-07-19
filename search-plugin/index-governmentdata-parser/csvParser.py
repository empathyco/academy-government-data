import csv
import json
import pandas as pd


def parseTsv():

    try:
        reader = csv.DictReader(open('../../data-plugin/datos_limpios/concesiones_completo.tsv'), delimiter="\t")

        with open("jsonOutput.json", 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))

        df = pd.read_json(r'jsonOutput.json')
        df["importe_total"].map(lambda x: float(x))
        df.to_json(r'jsonOutput.json', orient='records')

    except:
        print("Error with the route, please try again")

def parserInterface():

    parseTsv()


if __name__ == "__main__":
    parserInterface()