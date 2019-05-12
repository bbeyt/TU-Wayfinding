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

