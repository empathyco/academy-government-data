ARG PARENT_VERSION=22.6.1

FROM harbor.internal.shared.empathy.co/empathyco/index-builder-worker:${PARENT_VERSION}

ADD target/governmentdata-assembly-dir /srv/plugins

ENV PLUGIN_PATHS=/srv/plugins/
