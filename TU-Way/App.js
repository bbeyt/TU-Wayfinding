import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems /*createStackNavigator,*/ } from 'react-navigation';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import LoginScreen from './src/components/LoginScreen';
import MapScreen from './src/components/MapScreen';
import SettingsScreen from './src/components/SettingsScreen';

const {width} = Dimensions.get("window");

export default class App extends Component{
render() {
  return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/trinityEmblem.png')} style={{height: 120, width: 120, borderRadius: 60}} />
    </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  )

const AppDrawerNavigator = createDrawerNavigator({
  Map:MapScreen,
  Settings:SettingsScreen
}, {
    contentComponent: CustomDrawerComponent,
    drawerWidth: width,
    contentOptions: {
      activeTintColor: 'maroon'
    }
})

// const RootStack = createStackNavigator(
//   {
//     Login: { screen: LoginScreen },
//     Map: { screen: MapScreen },
//     Settings: { screen: SettingsScreen }
//   },
//   {
//     initialRouteName: 'Map',
//     navigationOptions: {
//         headerStyle: {
//         backgroundColor: '#800000'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold'
//       }
//     }
//   }
// );


// export default class App extends Component {
//   render() {
//     return <RootStack />;
//   }
// }