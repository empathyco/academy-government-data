pip install awscli-local

echo "Creating queues"
awslocal sqs create-queue --queue-name index-inbound-queue

echo "Creating buckets"
awslocal s3 mb s3://feeds
awslocal s3 mb s3://transformed-feeds

echo "Copying startup feeds fo 'feeds' bucket"
awslocal s3 cp /startup_feeds s3://feeds --recursive

# Initialize queues
awslocal sqs create-queue --queue-name index-inbound-queue
awslocal sqs create-queue --queue-name api-inbound-queue
awslocal sqs create-queue --queue-name worker-inbound-queue

# Initialize topics
awslocal sns create-topic --name api-outbound-topic
awslocal sns create-topic --name worker-outbound-topic
awslocal sns subscribe \
    --topic-arn arn:aws:sns:us-east-1:000000000000:api-outbound-topic \
    --protocol sqs \
    --notification-endpoint "http://localhost:4566/000000000000/worker-inbound-queue"
awslocal sns subscribe \
    --topic-arn arn:aws:sns:us-east-1:000000000000:worker-outbound-topic \
    --protocol sqs \
    --notification-endpoint "http://localhost:4566/000000000000/api-inbound-queue"

# Initialize buckets
awslocal s3 mb s3://feeds
awslocal s3 mb s3://transformed-feeds

# Copy startup feeds to bucket
awslocal s3 cp /startup_feeds s3://feeds --recursive

# Copy transformed feeds to bucket

awslocal s3 cp /transformed_feeds s3://transformed-feeds --recursive


echo ""
echo "**********************************"
echo "LocalStack initialization complete"
echo "**********************************"
