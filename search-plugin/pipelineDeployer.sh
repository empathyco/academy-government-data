python3 index-government-parser/csvParser.py
docker-compose up --build -d
elasticsearch = "localhost:9200"
status_code=$(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent --output /dev/null)
echo " STATUS CODE GET ELASTIC $status_code"
while [ $status_code -ne "200" ]
do
  echo "Waiting for $elasticsearch to be ready"
  sleep 1s
  status_code=$(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent --output /dev/null)
  echo " STATUS CODE GET ELASTIC $status_code"
done
cd index-governmentdata-plugin
mvn install
docker-compose up --build -d
echo "Enter the ID of the Mongo database (mongoId):"
read MID
curl -X POST localhost:8080/jobs/submit/governmentdata/$MID/catalog -H "Content-Type: application/json" 
     -d ../parsedJson.json
status_code = $(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent)
while [$status_code -ne 200]
do
    echo "Waiting for elasticsearch to be ready"
    status_code=$(curl -XGET "$elasticsearch/_cluster/health" --write-out %{http_code} --silent)
    echo " STATUS CODE GET ELASTIC $status_code"
done
docker volume rm index-governmentdata-plugin
cd ../search-governmentdata-plugin
mvn install
docker-compose up --build -d