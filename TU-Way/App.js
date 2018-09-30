import React, { Component } from 'react';
import { createStackNavigator, View } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import MapScreen from './src/components/MapScreen';
import SettingsScreen from './src/components/SettingsScreen';

const RootStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Map: { screen: MapScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: 'Settings',
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

//AppRegistry.registerComponent('TU-Way', () => App);





/*import React, { Component } from 'react';
import { createStackNavigator, View, AppRegistry } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import MapScreen from './src/components/MapScreen';
import SettingsScreen from './src/components/SettingsScreen';
import Header from './src/components/Header';

const RootStack = createStackNavigator(
    {
    Login: { screen: LoginScreen },
    Map: { screen: MapScreen },
    Settings: { screen: SettingsScreen },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName:'Login',
    }

     
     
export default class App extends React.Component {  
  render() {
    //when header is rendered, it is passed a prop of headerText
    return ( 
      <View style={{ flex: 1 }}>
        <Header headerText={'Login'} />
        return <RootStack />;
      </View>
      );
    }
 }   

AppRegistry.registerComponent('TU-Way', () => App);

*/
