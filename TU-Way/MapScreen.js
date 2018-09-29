import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';

export default class MapScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Welcome, ' + navigation.getParam('userName', 'Guest') + '!',
            headerLeft: (
                <Button
                    icon={{
                            name: 'menu',
                            color: '#fff',
                    }}
                    backgroundColor='transparent'
                    onPress={() => navigation.goBack()}
                />
            )
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