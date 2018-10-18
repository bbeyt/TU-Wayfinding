import React, { Component } from 'react';
import { View,ScrollView, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Text,StyleSheet,FlatList,Dimensions, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import { Container, Header, Right, Body, Left, Button, Icon, } from 'native-base';
import { SearchBar } from 'react-native-elements';

var {height, width} = Dimensions.get('window');

class MapScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
                <Header androidStatusBarColor={"#723130"} style={{backgroundColor: "#723130"}}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" onPress={() =>
                                this.props.navigation.openDrawer()} />
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
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
<KeyboardAvoidingView  behavior="height" keyboardVerticalOffset={0} enabled>
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
		    onSubmitEditing={Keyboard.dismiss}
                />
                </KeyboardAvoidingView>
		
		//Circular buttons under search bar
                <KeyboardAvoidingView style={styles.buttons} 
			flexDirection={'row'} 
			justifyContent = {'space-evenly'} 
			alignItems={'center'}  
			behavior="padding" 
			keyboardVerticalOffset={0} enabled >
                                <TouchableOpacity
                                        style={styles.circle}
                            onPress={Keyboard.dismiss}// this.props.navigation.navigate('List')}
                            >
                                    <Text style= {styles.buttonText}>{"Events"}</Text>
                                </TouchableOpacity>
			<TouchableOpacity
                                        style={styles.circle}
                            onPress={Keyboard.dismiss} //onPress={() => this.props.navigation.navigate('List')}
                            >
                                    <Text style= {styles.buttonText}>{"Classes"}</Text>
                                </TouchableOpacity>
			<TouchableOpacity
                                        style={styles.circle}
                            onPress={Keyboard.dismiss}//onPress={() => this.props.navigation.navigate('List')}
                            >
                                    <Text style= {styles.buttonText}>{"Buildings"}</Text>
                                </TouchableOpacity>
			<TouchableOpacity
                                        style={styles.circle}
                            onPress={Keyboard.dismiss} //onPress={() => this.props.navigation.navigate('List')}
                            >
                                    <Text style= {styles.buttonText}>{"Offices"}</Text>
                                </TouchableOpacity>
                </KeyboardAvoidingView>
		<KeyboardAvoidingView style={{flex:0.01}} behavior="height"/>
            </Container>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderRadius:width/10 ,
        backgroundColor: 'maroon',
        justifyContent:'center',
        zIndex: 10,
    },
    searchBar: {
        position: 'absolute',
    },
    separator:{
	height: 0.5,
   	 width: "80%",
    	alignSelf: 'center',
    	backgroundColor: "#555"
    },
    buttons:{
	paddingVertical: 10,
    }
})
