FROM alpine:latest
RUN apk add bash curl jq
COPY scripts/index-data.sh /tmp/index-data.sh

RUN chmod +x /tmp/index-data.sh
CMD ["/tmp/index-data.sh", "governmentdata", "/collection-data-files"]
