import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView,Keyboard, Text,StyleSheet,FlatList,Dimensions, TouchableOpacity } from 'react-native';
import { MapView,Permissions,Location  } from 'expo';
import { Container, Header, Right, Body, Left, Button, Icon, } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { createFilter } from 'react-native-search-filter';
import axios from 'axios';
import MapViewDirections from 'react-native-maps-directions';
import nameToCode from './NameRef.json';
import codeToCoords from './CoordRef.json';
import buildingsList from './Buildings.json';
import officesList from './Offices.json';
import sampleClasses from './SampleClasses.json';

//Get height and width of screen
const { height, width } = Dimensions.get('window');

//Get name of key for filtering by search term
const KEY_FOR_SEARCH_FILTER = ['key'];

//Get name of key for filtering by item type
const KEY_FOR_TYPE_FILTER = ['type'];

const GOOGLE_MAPS_API_KEY = 'AIzaSyBWZJ_hTM78RKil6GW-aBtqOf0DoNWwmcY';

//Function used to convert a valid location name from those listed in NameRef.json into a list of entrance coordinates.
const nameToCoords = (name) => {
    return codeToCoords[nameToCode[name.toUpperCase()]];
}

//Function to find the distance in miles between two points given in latitude and longitude
const distance = (lat1, long1, lat2, long2) => {
	if ((lat1 == lat2) && (long1 == long2)) {
		return 0;
	}
	else {
		const radlat1 = Math.PI * lat1/180;
		const radlat2 = Math.PI * lat2/180;
		const theta = long1-long2;
		const radtheta = Math.PI * theta/180;
		let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist;
	}
}

class MapScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    //Constructor to start search term as empty string
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
            searchType: '',
            searchList: buildingsList.concat(officesList, sampleClasses),
            origin: '',
            destination: '',
            location: {},
            errorMessage: ''
        };
    }

    componentDidMount() {
        //TODO: Get class list from mock database and add to searchList
        axios.get("http://25livepub.collegenet.com/calendars/publisher-calendar-tulife.ics")
            .then((res) => {
                //Parser for raw ics data to get events into search list
                const lines = res.data.split("\n");
                let events = [];
                let date = '';
                let key = '';
                let location = '';
                let previousKey = '';
                for (i = 0; i < lines.length; i++) {
                    if (lines[i].includes('DTSTART')) {
                        date = lines[i].split(":")[1].trim();
                    }
                    else if (lines[i].includes('SUMMARY')) {
                        key = lines[i].split(":")[1].trim().replace("\\", "");
                    }
                    else if (lines[i].includes('LOCATION')) {
                        location = lines[i].split(":")[1].split('\\')[0];
                    }
                    else if (lines[i].includes('END:VEVENT')) {
                        if (key === '' || date === '' || location === '') {
                            console.log("Warning: Upcoming event field not found.");
                        }
                        if (previousKey != key) {
                            events.push({
                                key: key,
                                date: date,
                                location: location,
                                type: 'event'
                            });
                            previousKey = key;
                        }
                        key = '';
                        date = '';
                        location = '';
                    }
                }
                this.setState(prevState => (
                    { 
                        searchList: prevState.searchList.concat(events),
                    }
                ))
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //updates searchTerm to the current search criteria
    searchUpdated(term) {
        this.setState(prevState => (
            { 
                searchTerm: term
            }
        ));
    }

    
    componentWillMount() {
        this._getLocationAsync(); 
    }
    
    
    async _getLocationAsync() {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
        Location.watchPositionAsync({ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location: location });
    }

    render() {
        //creates a filter to filter through classes
        const filteredTerms = this.state.searchList
            .filter(createFilter(this.state.searchTerm, KEY_FOR_SEARCH_FILTER))
            .filter(createFilter(this.state.searchType, KEY_FOR_TYPE_FILTER));
        return (
            <Container>
                <Header androidStatusBarColor={"#723130"} style={{ backgroundColor: "#723130" }}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() =>
                                this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>

		{/*ScrollView used to dismiss keyboard when tapping outside of text box or keyboard*/}
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
		<MapView 
			style={{ flex: 1 }}
			initialRegion={{
				latitude: 29.461144,
				longitude: -98.483166,
				latitudeDelta: 0.0102,
				longitudeDelta: 0.0086
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            sshowsMyLocationButton={true}
            provider="google"
            
			ref={c => this.mapView = c}
			onPress={this.onMapPress}
		>
			<MapViewDirections
				origin={this.state.origin}
				destination={this.state.destination}
				apikey={GOOGLE_MAPS_API_KEY}
				strokeWidth={4}
				strokeColor="limegreen"
				mode="walking"
				onReady={(result) => {
					this.mapView.fitToCoordinates(result.coordinates, {
						edgePadding: {
							right: (width / 20),
							bottom: (height / 20),
							left: (width / 20),
							top: (height / 20),
						}
					});
				}}
				onError={(errorMessage) => {
					console.log('Error encountered in MapViewDirections: ');
					console.log(errorMessage);
				}}
			/>
		</MapView>
		</ScrollView>

        {/*View encasing SearchBar*/}
        <KeyboardAvoidingView  behavior="height" enabled>
			<SearchBar
				style={styles.searchBar}
				containerStyle={{ backgroundColor: 'white' }}
				inputStyle={{ backgroundColor: 'white' }}
				ref={search => this.search = search}
				clearIcon={{ color: 'red' }}
				searchIcon={false}
				onChangeText={(term) => {this.searchUpdated(term)}}
				onClear={() => this.search.clear()}
				placeholder='Type Here...'
		        onSubmitEditing={Keyboard.dismiss}
            />
        </KeyboardAvoidingView>

        {/*Circular buttons under search bar*/}
        <KeyboardAvoidingView style={styles.buttons}
            flexDirection={'row'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            behavior="padding"
            enabled 
        >
            <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                    Keyboard.dismiss;
                    this.setState({ searchType: 'event' });
                }}
            >
                <Text style={styles.buttonText}>{"Events"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                    Keyboard.dismiss;
                    this.setState({ searchType: 'class' });
                }}
            >
                <Text style={styles.buttonText}>{"Classes"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                    Keyboard.dismiss;
                    this.setState({ searchType: 'building' });
                }}
            >
                <Text style={styles.buttonText}>{"Buildings"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                    Keyboard.dismiss;
                    this.setState({ searchType: 'office' });
                }}
            >
                <Text style={styles.buttonText}>{"Offices"}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

		{/*Adds extra spacing below buttons to appear more comfortable*/}
		<KeyboardAvoidingView style={{flex:0.01}} behavior="position"/>

		{/*Flatlist of classList, filters when you begin typing*/}
		<KeyboardAvoidingView style = {{flex:1}} behavior="padding">
		    <FlatList data= {filteredTerms} renderItem = {({item}) => 
			    <TouchableOpacity style= {styles.buttonList}
			        onPress={() => {
                        Keyboard.dismiss;

                        const currentLat = this.state.location.coords.latitude;
                        const currentLong = this.state.location.coords.longitude;
                        const currentLoc = currentLat + ',' + currentLong;

                        const coords = nameToCoords(item.location);
                        //Sorts all entrance coordinates by distance from current location to find closest entrance
                        coords.sort(function(lft, rgt) {
                            //Parses location string into numerical latitude and longitude coordinates
                            const lParts = lft.split(',');
                            const rParts = rgt.split(',');
                            const lLat = parseFloat(lParts[0]);
                            const lLong = parseFloat(lParts[1]);
                            const rLat = parseFloat(rParts[0]);
                            const rLong = parseFloat(rParts[1]);
                            const lDist = distance(currentLat,currentLong,lLat,lLong);
                            const rDist = distance(currentLat,currentLong,rLat,rLong)
                            return (lDist - rDist);
                        });

					    this.setState({
                            origin: currentLoc,
						    destination: coords[0]
					    });
				    }}
                >
        		    <Text style= {styles.listText}>{item.key}</Text>
                    <Text style= {styles.listSubText}>
                        {
                            item.type !== 'building' && item.type !== 'office' ? 
                                (item.hasOwnProperty("date") ? item.date + ' at ' + item.location : item.location)
                                : null
                        }
                    </Text>	
			    </TouchableOpacity>
			}/>
		</KeyboardAvoidingView>
    </Container>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: width / 30,
        zIndex: 10,
    },
    buttonList: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    },
    listText: {
        textAlign: 'left',
        color: 'black',
        fontSize: width / 25,
        zIndex: 10,
    },
    listSubText: {
        textAlign: 'left',
        color: 'grey',
        fontSize: width / 35,
        zIndex: 10
    },
    circle: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        backgroundColor: "#723130",
        justifyContent: 'center',
        zIndex: 10,
    },
    searchBar: {
        position: 'absolute',
    },
    separator: {
        height: 0.5,
        width: "80%",
        alignSelf: 'center',
        backgroundColor: "#555"
    },
    buttons: {
        paddingVertical: 10,
    }
})
