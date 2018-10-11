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
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={74}>
                
                <MapView
                    style={{
                        flex: 1
                    }}
                    initialRegion={{
                        latitude: 29.461144,
                        longitude: -98.483166,
                        latitudeDelta: 0.0102,
                        longitudeDelta: 0.0086
                    }}
                />
                <SearchBar
                    style={{
                        //flex: 1,
                        position: 'absolute',
                        top: 50,
                        bottom: 50,
                        left: 0,
                        //color: '#fff'
                    }}
                    containerStyle={{ backgroundColor: 'white' }}
                    inputStyle={{ backgroundColor: 'white' }}
                    ref={search => this.search = search}
                    clearIcon={{ color: 'red' }}
                    searchIcon={false} // You could have passed `null` too
                    onChangeText={() => { }}
                    onClear={() => this.search.clear()}
                    placeholder='Type Here...'
                //alignSelf= 'center'
                //top: 35;
                />
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width/10,
        padding:50
      },
      buttonText:{
        textAlign:'center',
        color: 'white',
        fontSize:width/30
      },
    circle: {
        width: width/5,
        height: width/5,
        borderRadius: width/2,
        backgroundColor: 'maroon',
        justifyContent:'center',
    }
})