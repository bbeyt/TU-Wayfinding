import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput,
  ImageBackground, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, AsyncStorage,Alert,
} from 'react-native';
import { Container, Header, Right, Body, Left, Button, Icon} from 'native-base';
import {ListItem,CheckBox} from 'react-native-elements';


export default class LoginScreen extends Component {
    static navigationOptions = {
    drawerLabel:  1==1 ? 'Login' : 'Logout',
    drawerIcon: ({ tintColor }) => (
        <Icon name="paper" style={{ fontSize: 24, color: tintColor }} />
    )

  }
 
  constructor(props){
  super(props)
  this.state = {checked: false, username: '', password:'', loggedin: false}}



  render() {
    return (
      this.state.loggedin == false ?
      
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            autoCapitalize='none'
            returnKeyType='next'
            autoCorrect={false}
            onSubmitEditing={() => this.refs.passwrd.focus()}
            onChangeText={username => this.setState({username})}
            
          />

          <TextInput placeholder='Password'
            style={styles.textInput}
            returnKeyType = 'done'
            secureTextEntry
            autoCorrect={false}
            ref={"passwrd"}
            onChangeText={password => this.setState({password})}
          />
          <Text style={styles.forgotTxt} >Forgot your password?</Text>
          
          <CheckBox 
          checked= {this.state.checked} onPress={()=> this.setState({checked: !this.state.checked})}
          title = "Keep me logged in"
          
          />

        </ImageBackground>

        <Image source={require('../../assets/trinityEmblem.png')} style={styles.logo} />

        <Button onPress={ this.testLogin} style={styles.loginBtn} light><Text style={styles.buttonTxt}> Login </Text></Button>
        
      </ImageBackground >
      </Container>
      </TouchableWithoutFeedback>
      :      
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
        <Text numberOfLines={1} style={styles.welcomeTxt}>Welcome</Text>
        <Button onPress={ this.logoutAlert} style={styles.loginBtn} light><Text style={styles.buttonTxt}> Logout </Text></Button>
        </ImageBackground>
        </Container>
    );
  }
  

    
    testLogin =()=>{

    if( this.state.username == '' || this.state.password == ''){
      alert("Invalid Input")
    }
    if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.forceUpdate();
      this.state.loggedin = true;


    }
  }
 
    logoutAlert= ()=>{    
    Alert.alert( 
      'Logout',
      'Are you sure',
      [
          {
              text:'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
          },
          {
              text: 'Ok',
              onPress: () => {
                this.state.loggedin = false; 
                this.forceUpdate();
                this.state.username = '';
                this.state.password = '';
              }
          }
      ],
      {cancelable: false},
    )
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
    margin: 50,
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