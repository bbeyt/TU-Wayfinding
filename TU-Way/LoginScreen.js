import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
      title: 'Login'
    };
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login Screen</Text>
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