import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import SwitchButton from './SwitchButton';

export class SettingsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
        return {
            title: 'Settings',
            headerLeft: (
                <Button
                    icon={{
                            name: 'menu',
                            color: '#fff',
                    }}
                    backgroundColor='transparent'
                    onPress={() => alert("Settings button pressed.")}
                />
            )
        };
    };
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Push Notifications</Text>
                <SwitchButton />

                <Text style={styles.text}>Cellular Data</Text>
              <SwitchButton />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        color: '#800000'
    }
});

export default SettingsScreen;