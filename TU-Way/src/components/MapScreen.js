import React, { Component } from 'react';
import { View, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Text,StyleSheet,FlatList,Dimensions, TouchableOpacity } from 'react-native';
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
                <MapView
                    style={{ flex: 5 }}
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
		    onSubmitEditing={Keyboard.dismiss}
                />
                </KeyboardAvoidingView>
		
		//Circular buttons under search bar
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={0} enabled >
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

            </Container>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
	paddingHorizontal: width/10,
      },
      buttonText:{
        textAlign:'center',
        color: 'white',
        fontSize:width/30,
        zIndex: 10,
      },
    circle: {
	flex:1,
        width: width/5,
        height: width/5,
        borderRadius: width/2,
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
    }
})
