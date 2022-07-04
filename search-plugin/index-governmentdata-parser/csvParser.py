import csv
import json


def parseTsv(tsvRoute):

    try:
        reader = csv.DictReader(open(tsvRoute), delimiter=",")

        with open("jsonOutput.json", 'w') as jsonFile:
            jsonFile.write(json.dumps(list(reader)))
    except:
        print("Error with the route, please try again")

def parserInterface():
    tsvRoute = ""

    while (tsvRoute == ""):
        tsvRoute = input("Enter a suitable route for the TSV file:\n")

    parseTsv(tsvRoute)


if __name__ == "__main__":
    parserInterface()