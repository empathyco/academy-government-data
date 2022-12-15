#!/bin/bash

cd index-governmentdata-parser
echo "Extracting data..."
gzip -dk ../../data-plugin/datos_limpios/concesiones_completo1.tsv.gz
echo "Data extracted"
sleep 4
pip3 install pandas
python3 csvParser.py
echo "Doing mad stuff over the data"
rm ../../data-plugin/datos_limpios/concesiones_completo1.tsv
echo "Mad stuff done"
cd ..

docker-compose up --build -d
elasticsearch="http://localhost:9200"
status_code=$(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent --output /dev/null)
echo " STATUS CODE GET ELASTIC $status_code"
while [ $status_code -ne "200" ]
do
  echo "Waiting for $elasticsearch to be ready"
  sleep 3
  status_code=$(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent --output /dev/null)
  echo " STATUS CODE GET ELASTIC $status_code"
done

cd index-governmentdata-plugin
mvn clean package -DskipTests
docker-compose up --build -d

status_code=$(curl -XGET "localhost:8080/status/health" --write-out %{http_code} --silent --output /dev/null)
echo "JETTY SERVER STATUS $status_code"

while [ $status_code -ne "200" ]
do
  echo "Waiting for jetty server to be ready"
  sleep 3
  status_code=$(curl -XGET "localhost:8080/status/health" --write-out %{http_code} --silent --output /dev/null)
  echo "JETTY SERVER STATUS $status_code"
done


jobId=$(curl -d "@../index-governmentdata-parser/jsonOutput.json" -X POST localhost:8080/jobs/submit/governmentdata/62b585cd6fe71f182dc9763e/catalog -H "Content-Type: application/json" | python3 -c "import sys, json; print(json.load(sys.stdin)['indexJobId'])")

state=$(curl -XGET "localhost:8080/jobs/governmentdata/62b585cd6fe71f182dc9763e/job/$jobId" | python3 -c "import sys, json; print(json.load(sys.stdin)['state'])")

while [ $state != "SUCCESS" ]
do
    echo "Waiting for indexing to end"
    sleep 3
    state=$(curl -XGET "localhost:8080/jobs/governmentdata/62b585cd6fe71f182dc9763e/job/$jobId" | python3 -c "import sys, json; print(json.load(sys.stdin)['state'])")
    echo " STATUS CODE GET JOB $state"
done

read -s -n 1 -p "Press any key to continue . . ."

docker-compose down
cd ../search-governmentdata-plugin

curl --request PUT \
  --url http://localhost:9200/governmentdata-links

curl --request PUT \
  --url http://localhost:9200/governmentdata-links/_mapping \
  --header 'Content-Type: application/json' \
  --data '{
    "properties": {
        "updated_on": {
            "type": "date"
        },
        "weight": {
            "type": "float"
        }
    }
}'

mvn clean package -DskipTests
docker-compose up --build -d