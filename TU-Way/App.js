import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MapView } from "expo";

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Map"
          onPress={() => this.props.navigation.navigate('Map', {
            userName: 'Benjamin Beyt'
          })}
        />
      </View>
    )
  }
}

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome, ' + navigation.getParam('userName', 'Guest') + '!'
    };
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
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
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Map: {
      screen: MapScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#800000'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

