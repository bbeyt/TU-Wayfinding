import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('./App/Img/background.jpg')} style={styles.container}>

                <KeyboardAvoidingView behavior="padding" style={styles.logocontainer}>
                    <Image source={require('./App/Img/trinityEmblem.png')} style={styles.logo} />
                    <Image source={require('./App/Img/MaroonSquare.jpg')} style={styles.square} />
                    <Text numberOfLines={1} style={styles.welcome}>Enter your login credentials</Text>
                </KeyboardAvoidingView>

                <View behavior="height" style={styles.logincontainer}>

                    <TextInput placeholder='Username'
                        style={styles.textinput}
                        returnKeyType='next'
                        autoCorrect={false}
                        onSubmitEditing={() => this.refs.passwrd.focus()}
                    />
                    <TextInput placeholder='Password'
                        style={styles.textinput}
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        ref={"passwrd"}

                    />

                    <CheckBox
                        // style = {styles.checkboxes}
                        label='Keep me logged in'
                        checked={false}
                        underlayColor='#fff'


                    />

                    <TouchableOpacity style={styles.loginbtn}>
                        <Text> Log In </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotpwd}>
                        <Text> Forgot your password? </Text>
                    </TouchableOpacity>



                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    logincontainer: {
        alignItems: 'center',

    },
    textinput: {
        color: '#fff',
        alignSelf: 'stretch',
        padding: 12,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: '#fff',
        borderWidth: 0.5,
        width: 300,
        top: -400,
        //justifyContent: 'top',
        //height: 100,
    },
    loginbtn: {
        backgroundColor: 'rgb(128,0,0)',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    forgotpwd: {
        backgroundColor: 'rgb(128,0,0)',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    //checkboxes: {
    //   top: 100,
    // }

});
