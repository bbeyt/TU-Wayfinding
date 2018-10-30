import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput,
  ImageBackground, Image
} from 'react-native';
//import CheckBox from 'react-native-checkbox';
import { Container, Header, Right, Body, Left, Button, Icon} from 'native-base';
import {ListItem,CheckBox} from 'react-native-elements';




export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Icon name="paper" style={{ fontSize: 24, color: tintColor }} />
    )
}
  constructor(props){
    super(props)
    this.state = {checked: false}
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
          


          {/*<ListItem onPress={()=> this.setState({checked: !this.state.checked})}>*/}
            <CheckBox 
            checked= {this.state.checked} onPress={()=> this.setState({checked: !this.state.checked})}
            title = "Keep me logged in"
            size = "15"
            />
             
            
          

        </ImageBackground>

        <Image source={require('../../assets/trinityEmblem.png')} style={styles.logo} />

        <Button style={styles.loginBtn} light><Text style={styles.buttonTxt}> Login </Text></Button>

        {/*<Button title="Log In" buttonStyle={styles.loginBtn} onPress={() => this.props.navigation.navigate('Map', {
          userName: 'Benjamin Beyt'
        })} />

      <Button title="Continue as Guest" buttonStyle={styles.guestBtn} onPress={() => this.props.navigation.navigate('Map')} />*/}

      </ImageBackground >
      </Container>
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
  buttonTxt: {
    fontSize: 25,
    color: 'white',
  },
  loginBtn: {
    margin: 5,
    backgroundColor: "#723130",
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
    color: "#723130",
  },
  square: {
    marginVertical: 20,
    width: 325,
    alignItems: 'center',
    padding: 10,
  }

});