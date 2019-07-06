JHOVE REST WS resources and application server
==============================================

Quick Start
-----------
REST wrappings for [JHOVE](https://jhove.openpreservation.org), provides:

- JAXB REST resources for JHOVE validation
- Dropwizard application server
- Basic Web GUI implementation

### Build from source
You'll need Java 8 or greater and Maven to build the project.

1. Clone this repo: `git clone git@github.com:carlwilson/jhove-rest.git`
2. Drop into project directory: `cd jhove-rest`
3. Compile and package via Maven `mvn clean package`

### Run the server
From the cloned project directory to start the jetty server:

```shell
java -jar jhove-rest-server/target/jhove-rest-server-0.0.1-SNAPSHOT.jar server jhove-rest.yml
```
