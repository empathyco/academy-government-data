python3 index-government-parser/csvParser.py
cd index-governmentdata-plugin
mvn install
docker-compose up --build -d
echo MongoId?
read MID
curl localhost:8080/jobs/submit/governmentdata/$MID/catalog