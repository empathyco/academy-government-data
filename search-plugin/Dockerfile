    # Extends from empathy search service image
FROM harbor.internal.shared.empathy.co/empathyco/search-service:14.3.0

# Adds custom plugins files
ADD src/main/resources/plugin-configs /srv/plugin-configs
ADD src/main/resources/collection-config /srv/collection-config
ADD target/governmentdata-assembly-dir /srv/plugins
