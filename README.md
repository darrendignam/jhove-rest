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
### Test WS Service deployment from command line
Using CURL:
```bash
curl localhost:8080/api/jhove
{"version":"1.22.1","buildDate":1556547671000,"rights":"Derived from software Copyright 2004-2011 by the President and Fellows of Harvard College. Version 1.7 to 1.11 independently released. Version 1.12 onwards released by Open Preservation Foundation. Released under the GNU Lesser General Public License."}
```

### Test if the server is working via Web Browser
Open a browser and visit [http://localhost:8080/](http://localhost:8080/)
