# See https://docs.docker.com/engine/userguide/eng-image/multistage-build/

FROM maven as builder
WORKDIR /build
RUN git clone https://github.com/openpreserve/jhove-rest.git
WORKDIR /build/jhove-rest
RUN mvn clean package

FROM openjdk:8-jre-alpine

ENV JHOVE_REST_VERSION=0.0.1-SNAPSHOT

# Since this is a running network service we'll create an unprivileged account
# which will be used to perform the rest of the work and run the actual service:

# Debian:
# RUN useradd --system --user-group --home-dir=/opt/jhove-rest jhove-rest
# Alpine / Busybox:
RUN install -d -o root -g root -m 755 /opt && adduser -h /opt/jhove-rest -S jhove-rest
USER jhove-rest
WORKDIR /opt/jhove-rest

COPY --from=builder /build/jhove-rest/jhove-rest-server/target/jhove-rest-server-${JHOVE_REST_VERSION}.jar /build/jhove-rest/jhove-rest.yml /opt/jhove-rest/

EXPOSE 8080
ENTRYPOINT java -jar /opt/jhove-rest/jhove-rest-server-${JHOVE_REST_VERSION}.jar server jhove-rest.yml
