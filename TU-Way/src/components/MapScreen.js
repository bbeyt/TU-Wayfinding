import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import { Container, Header, Right, Body, Left, Button, Icon, } from 'native-base';
import { SearchBar } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';

const axios = require('axios');

const baseURL = "https://maps.googleapis.com/maps/api/directions/json";
const originLatLong = "29.460987,-98.482356";
const destinationLatLong = "29.463259,-98.482488";
const apiKey = "AIzaSyBWZJ_hTM78RKil6GW-aBtqOf0DoNWwmcY";
const dirMode = "walking";

axios.get(baseURL, {
    params: {
        origin: originLatLong,
        destination: destinationLatLong,
        key: apiKey,
        mode: dirMode
    }
})

Geocoder.init(apiKey);

//Order is "Name": ["Latitude,Longitude"]

var nameToCoordinate = {"Mabee": ["29.460987,-98.482356"], "WBC": ["29.459727,-98.483617"], "WITT": ["29.461367,-98.482488"], 
"COAT": ["29.462540,-98.482050", "29.462747,-98.482069", "29.462818,-98.482171", "29.462796,-98.482495", "29.462911,-98.482496"], 
"Community and Campus Involvement": ["29.462773,-98.482756"], "NH": ["29.463259,-98.482488", "29.463255,-98.482792"], 
"Financial Services": ["29.463317,-98.482430"], "Tower": ["29.462911,-98.483532"], "MPC": ["29.463027,-98.483903", "29.462915,-98.484398"], 
"SML": ["29.462498,-98.483948", "29.462466,-98.484082"], "RTT": ["29.463746,-98.482417"], "DSB": ["29.463619,-98.481803", "29.463748,-98.482294"], 
"LA": ["29.464673,-98.481816", "29.464186,-98.482196"], "Library": ["29.464903,-98.483136"], "HAS": ["29.465646,-98.483863"], 
"CGC": ["29.465046,-98.484164", "29.464955,-98.483885", "29.465421,-98.483883"], 
"CSI": ["29.463982,-98.483790", "29.464406,-98.483688", "29.464784,-98.483875"]};

//Get height and width of screen
var { height, width } = Dimensions.get('window');

//Get name of key for list of data
const keys = ['key'];

//Random list of classes for prototype
var classList = [{ key: 'Principles of Computer Science II' }, { key: 'Low-Level Computing' }, { key: 'Discrete Structures' }, { key: 'Principles of Data Abstraction' }, { key: 'Principles of Functional Languages' }, { key: 'Principles of Algorithms' }, { key: 'Principles of Computer Design' }, { key: 'Software Engineering' }, { key: 'Operating Systems' }, { key: 'Web Application Design' }, { key: 'Senior Software Project' }, { key: 'Calculus III' }, { key: 'Engineering Analysis and Design II' }, { key: 'Graphics' }];

//List of classes that have been filtered by current search criteria
var filteredTerms = [];

class MapScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    //Constructor to start search term as empty string
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    componentDidMount() {
        axios.get("http://25livepub.collegenet.com/calendars/publisher-calendar-tulife.ics")
            .then(function (res) {
                //TODO: parse ics data and add to classList
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //updates searchTerm to the current search criteria
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {

        //creates a filter to filter through classes
        const filteredTerms = classList.filter(createFilter(this.state.searchTerm, keys))
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

<<<<<<< HEAD
                {/*ScrollView used to dismiss keyboard when tapping outside of text box or keyboard*/}
=======
<<<<<<< HEAD
                {/*ScrollView used to dismiss keyboard when tapping outside of text box or keyboard*/}
=======
                //ScrollView used to dismiss keyboard when tapping outside of text box or keyboard
>>>>>>> 99fccf28b8ab7e4aca6bddb969e8885c46456f42
>>>>>>> d9bb6f634921ffb8e64ffd34e13313b5071e690e
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 29.461144,
                            longitude: -98.483166,
                            latitudeDelta: 0.0102,
                            longitudeDelta: 0.0086
                        }}
                    />
                </ScrollView>

<<<<<<< HEAD
                {/*View encasing SearchBar*/}
                <KeyboardAvoidingView behavior="height" enabled>
                    <SearchBar
=======
<<<<<<< HEAD
                {/*View encasing SearchBar*/}
                <KeyboardAvoidingView behavior="height" enabled>
                    <SearchBar
=======
                //View encasing SearchBar
                <KeyboardAvoidingView behavior="height" enabled>
                    var term= "";
                <SearchBar
>>>>>>> 99fccf28b8ab7e4aca6bddb969e8885c46456f42
>>>>>>> d9bb6f634921ffb8e64ffd34e13313b5071e690e
                        style={styles.searchBar}
                        containerStyle={{ backgroundColor: 'white' }}
                        inputStyle={{ backgroundColor: 'white' }}
                        ref={search => this.search = search}
                        clearIcon={{ color: 'red' }}
<<<<<<< HEAD
                        searchIcon={false}
=======
                        searchIcon={false} // You could have passed `null` too
>>>>>>> 99fccf28b8ab7e4aca6bddb969e8885c46456f42
                        onChangeText={(term) => { this.searchUpdated(term) }}
                        onClear={() => this.search.clear()}
                        placeholder='Type Here...'
                        onSubmitEditing={Keyboard.dismiss}
                    >
                    </SearchBar>
                </KeyboardAvoidingView>

<<<<<<< HEAD
                {/*Circular buttons under search bar*/}
=======
<<<<<<< HEAD
                {/*Circular buttons under search bar*/}
=======
                //Circular buttons under search bar
>>>>>>> 99fccf28b8ab7e4aca6bddb969e8885c46456f42
>>>>>>> d9bb6f634921ffb8e64ffd34e13313b5071e690e
                <KeyboardAvoidingView style={styles.buttons}
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    behavior="padding"
                    enabled >
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={Keyboard.dismiss}
                    >
                        <Text style={styles.buttonText}>{"Events"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={Keyboard.dismiss}
                    >
                        <Text style={styles.buttonText}>{"Classes"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={Keyboard.dismiss}
                    >
                        <Text style={styles.buttonText}>{"Buildings"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={Keyboard.dismiss}
                    >
                        <Text style={styles.buttonText}>{"Offices"}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

<<<<<<< HEAD
                {/*Adds extra spacing below buttons to appear more comfortable*/}
                <KeyboardAvoidingView style={{ flex: 0.01 }} behavior="position" />

                {/*}Flatlist of classList, filters when you begin typing*/}
=======
<<<<<<< HEAD
                {/*Adds extra spacing below buttons to appear more comfortable*/}
                <KeyboardAvoidingView style={{ flex: 0.01 }} behavior="position" />

                {/*Flatlist of classList, filters when you begin typing*/}
=======
                //Adds extra spacing below buttons to appear more comfortable
                <KeyboardAvoidingView style={{ flex: 0.01 }} behavior="position" />

                //Flatlist of classList, filters when you begin typing
>>>>>>> 99fccf28b8ab7e4aca6bddb969e8885c46456f42
>>>>>>> d9bb6f634921ffb8e64ffd34e13313b5071e690e
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                    <FlatList data={filteredTerms} renderItem={({ item }) =>
                        <TouchableOpacity style={styles.buttonList}
                            onPress={() => Keyboard.dismiss}>
                            <Text style={styles.listText}>{item.key}</Text>
                        </TouchableOpacity>
                    }
                    />
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
        fontSize: width / 30,
        zIndex: 10,
    },
    circle: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        backgroundColor: 'maroon',
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
