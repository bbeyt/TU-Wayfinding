import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Container, Header, Right, Body, Left, Button, Icon, } from 'native-base';


class MapScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
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
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 29.461144,
                        longitude: -98.483166,
                        latitudeDelta: 0.0102,
                        longitudeDelta: 0.0086
                    }}
                />
            </Container>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})