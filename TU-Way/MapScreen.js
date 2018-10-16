import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Text,StyleSheet,FlatList,Dimensions, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { SearchBar } from 'react-native-elements'

var {height, width} = Dimensions.get('window');

export default class MapScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Welcome, ' + navigation.getParam('userName', 'Guest') + '!',
            headerLeft: (
                <Button
                    icon={{
                        name: 'menu',
                        color: '#fff',
                    }}
                    backgroundColor='transparent'
                    onPress={() => navigation.goBack()}
                />
            )
        };
    };

    constructor() {
        super()
        this.state = {
            //behavior: 'position'
            // there are three ways to adjust (position , height , padding ) 
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}behavior="height" keyboardVerticalOffset={0} enabled>
                <MapView
                    style={{
                        flex: 8
                    }}
                    initialRegion={{
                        latitude: 29.461144,
                        longitude: -98.483166,
                        latitudeDelta: 0.0102,
                        longitudeDelta: 0.0086
                    }}
                />

		<KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={0} enabled>
                <SearchBar
                    style={styles.searchBar}
                    containerStyle={{ backgroundColor: 'white' }}
                    inputStyle={{ backgroundColor: 'white' }}
                    ref={search => this.search = search}
                    clearIcon={{ color: 'red' }}
                    searchIcon={false} // You could have passed `null` too
                    onChangeText={() => { }}
                    onClear={() => this.search.clear()}
                    placeholder='Type Here...'
                />
		</KeyboardAvoidingView>

		<KeyboardAvoidingView style={{ flex: 1 }} behavior="height" keyboardVerticalOffset={0} enabled >
		<FlatList
	                style={styles.container}
	                horizontal= {true}
	                data = {[{key:'Events'}, {key:'Classes'}, {key:'Buildings'},{key:'Offices'}]}
	                keyExtractor={(item, index) => item.key}
                    renderItem={  ({item}) => 
		                <TouchableOpacity 
			                style={styles.circle}
                            //onPress={() => this.props.navigation.navigate('List')}
                            >
        		            <Text style= {styles.buttonText}>{item.key}</Text>	
		                </TouchableOpacity>}
                    />
		</KeyboardAvoidingView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width/10,
      },
      buttonText:{
        textAlign:'center',
        color: 'white',
        fontSize:width/30,
	zIndex: 10,
      },
    circle: {	
        width: width/5,
        height: width/5,
        borderRadius: width/2,
        backgroundColor: 'maroon',
        justifyContent:'center',
	zIndex: 10,
    },
    searchBar: {
        position: 'absolute',
    }
})
