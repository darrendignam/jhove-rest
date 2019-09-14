FROM openjdk:8
WORKDIR /jhove-rest
COPY "./jhove-rest-server/target/jhove-rest-server-0.0.1-SNAPSHOT.jar" /jhove-rest/jhove-rest-server-0.0.1-SNAPSHOT.jar
COPY ./jhove.conf /jhove-rest/
CMD ["java", "-jar", "/jhove-rest/jhove-rest-server-0.0.1-SNAPSHOT.jar", "server"]
