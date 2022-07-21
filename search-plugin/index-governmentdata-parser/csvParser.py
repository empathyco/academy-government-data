import csv
import json
import pandas as pd
import sys


def parseTsv():
    file_number = 1
    try:
        for file_name in sys.argv:
            if file_name == sys.argv[0]:
                continue
            print("Parsing TSV {0} to JSON".format(file_name))
            reader = csv.DictReader(open('../../data-plugin/datos_limpios/{0}'.format(file_name)), delimiter="\t")

            with open("jsonOutput{0}.json".format(file_number), 'w') as jsonFile:
                jsonFile.write(json.dumps(list(reader)))

            print("Parsing done")

            print("Fixing total imports")
            df = pd.read_json(r'jsonOutput{0}.json'.format(file_number))
            df["importe_total"].map(lambda x: float(x))
            print("Imports fixed")
            df.to_json(r'jsonOutput{0}.json'.format(file_number), orient='records')
            print("JSON {0} wrote out".format("jsonOutput" + str(file_number)))
            file_number += 1
        print("******* PYTHON SCRIPT ENDED (finally) *******")
    except:
        print("Error with the route, please try again")

def parserInterface():
    parseTsv()


if __name__ == "__main__":
    parserInterface()