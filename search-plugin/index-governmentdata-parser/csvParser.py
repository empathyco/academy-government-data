import csv
import json


def parseTsv(tsvRoute, jsonRoute):

    try:
        reader = csv.DictReader(open(tsvRoute), delimiter="\t")

        with open(jsonRoute, 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))
    except:
        print("Error with the route, please try again")

def parserInterface():
    tsvRoute = ""
    jsonRoute = ""

    while (tsvRoute == ""):
        tsvRoute = input("Enter a suitable route for the TSV file:\n")

    while (jsonRoute == ""):
        jsonRoute = input("Enter a suitable route for the JSON file:\n")

    parseTsv(tsvRoute, jsonRoute)


if __name__ == "__main__":
    parserInterface()