import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput,
  ImageBackground, Image
} from 'react-native';
import { Button } from 'react-native-elements';
import CheckBox from 'react-native-checkbox';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  };
  render() {
    return (
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>

        <Text numberOfLines={1} style={styles.welcomeTxt}>Enter your login credentials</Text>

        <ImageBackground source={require('../../assets/MaroonSquare.jpg')} style={styles.square}>

          <TextInput placeholder='Username'
            style={styles.textInput}
            returnKeyType='next'
            autoCorrect={false}
            onSubmitEditing={() => this.refs.passwrd.focus()}
          />

          <TextInput placeholder='Password'
            style={styles.textInput}
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
            ref={"passwrd"}

          />

          <Text style={styles.forgotTxt} onPress={() => alert("Forgot pressed")}>
            Forgot your password?
          </Text>

          <CheckBox
            style={styles.checkbox}
            label='Keep me logged in'
            checked={false}
            underlayColor='#fff'
          />

        </ImageBackground>

        <Image source={require('../../assets/trinityEmblem.png')} style={styles.logo} />

        <Button title="Log In" buttonStyle={styles.loginBtn} onPress={() => this.props.navigation.navigate('Map', {
          userName: 'Benjamin Beyt'
        })} />

        <Button title="Continue as Guest" buttonStyle={styles.guestBtn} onPress={() => this.props.navigation.navigate('Map')} />

      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    color: '#fff',
    margin: 10,
    padding: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#fff',
    borderWidth: 0.5,
    width: '90%',
  },
  loginBtn: {
    margin: 5,
    backgroundColor: 'rgb(128,0,0)',
    width: 325,
    alignItems: 'center',
  },
  guestBtn: {
    margin: 5,
    backgroundColor: 'rgb(128,0,0)',
    width: 325,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  welcomeTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  forgotTxt: {
    color: 'blue',
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  checkbox: {
    marginVertical: 5,
  },
  square: {
    marginVertical: 20,
    width: 325,
    alignItems: 'center',
    padding: 10,
  }

});