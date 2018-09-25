import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Map: {
      screen: MapScreen
    }
  },
  {
    initialRouteName: 'Login',
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