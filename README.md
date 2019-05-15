# TU-Wayfinding

The navigation app for Trinity University students and guests. 

## Branches

* master: Contains all working code, including functioning navigation, non-functioning login and settings views, and a searchable, filterable list of destinations.
* ui: Contains a working, improved version of the list of destinations that remains hidden until the user presses a button at the bottom of the map view and which moves out of the way when navigation begins. Not integrated to master due to remaining bugs concerning integration of the `<ScrollView>` and `<SlidingUpPanel>` containers, as both define behavior for drags.
* beacanPie: Contains work done with beacons before they were discarded. Left for reference.

## Adding a Building or Office

To add a new potential destination for navigation, follow these steps:
1. As indoor navigation is not currently supported, you will need to gather a list of the latitude longitude coordinates for the entrances of the destination building. 
2. In src/components/CoordRef.json, add an entry for the new destination. The key should be a code representing the destination; it will be used internally once set, so it is not too important for it to be human readable. The value should be an array of strings representing the latitude longitude coordinates of the entrances. Each string should be of the form "latitude,longitude".
3. In src/components/NameRef.json, you will need to add entries for any name that may be used to reference the destination, even in student schedules or the upcoming events feed. These entries should include the names of any rooms you would like to navigate to within the building, as indoor navigation is not supported. The key of an entry should be the name in all caps. The value of an entry should be the code used to refer to the destination in CoordRef.json.
4. Finally, add an entry for the building or office into Buildings.json or Offices.json, respectively. Each entry is an anonymous object containing fields for key, location, and type. The key should be the name of the destination that you would like displayed to the user. The location can be any of the names for the destination defined in NameRef.json. The type should be "building" for buildings, and "office" for offices.

## Upcoming Events

Currently, upcoming events are not being loaded into the navigation app. This is because the .ics feed that used to provide Trinity event information to our app has since been taken down for unknown reasons. The code to parse .ics data into a format usable by the app still exists in the code, within the `componentDidMount` lifecycle function of the MapScreen component. If the .ics feed url is swapped out for a valid one, the code should work as intended.

## MySQL Database, Express JS Server, and Tunneling with ngrok

The database for testing purposes is set up on MySQL Workbench with a mock datatable called course-info. This does not have login credential information to test logins or pull class information from TigerPaws. The database is accessible on the Trinity server Cloud 9. The database connects to Expo and React-Native through Express Js a middleware which acts as a server. This is done with the 'server.js' file using a 'databaseConfig.js' file for credentials for the MySQL database. The databaseConfig file can be changed to the configurations of another database so that the server pulls from a different source. 

## Server Set-up

To set up a version of the server on a Windows machine, you will first need to have MySQL Server installed. Then, follow these steps:

After cloning the repository, open the server folder and run the command npm i from the command line. This will install all dependencies.
Import the tu_relay.sql file into your instance of MySQL Server to get the tables used by the server.
In the server directory, add a databaseConfig.js file with the following structure:
 const config = {
     host: "localhost",
     user: "root",
     password: "", //The root password for your MySQL instance
     database: "tuway",
 }
 
 module.exports = config
You can now run the server using the command npm start within the server directory. In particular:
The server should now be fully operational. Run the server using the command npm start within the server directory. The server can also be tested independently from the full application using the command node server.js.

## Ngrok Tunneling and Tunneling Set-up

As the database is on a cloud computer it is connected via ethernet and is not accessible by other networks. To allow for the server to run on devices connected to different networks, tunneling was implemented. Tunneling provides an http for the server to sit on. This can be secured and is done with the ngrok package. To use the tunneling with the server, there is code inside of the 'server.js' file for ngrok connection. Ngrok will need to be installed using the command npm install ngrok. It will then need to be initialized with an authorization token. 
The command for this is ngrok authtoken [authtoken for account]
The authorization token will be found in the setup of an ngrok account. This is a free service to allow tunneling.
Next set up the http for the tunnel using the command ngrok http [port]. The port used should match the port for the server which is found in the 'server.js' file. After running the http request, ngrok will supply a site with the server. You can type this into the browser to ensure the server is up.


