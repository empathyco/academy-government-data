mvn clean package -DskipTests
docker-compose up --build -d && docker-compose logs -f