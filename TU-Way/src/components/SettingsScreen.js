import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchButton from './SwitchButton';
import { Container, Header, Right, Body, Left, Icon } from 'native-base'

export class SettingsScreen extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="settings" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <Header androidStatusBarColor={"#723130"} style={{backgroundColor: "#723130"}}>
                    <Left>
                        <Icon name="menu" onPress={() =>
                            this.props.navigation.openDrawer()} />
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <View style={styles.row}>
                    <Text style={styles.text}>Push Notifications</Text>
                    <SwitchButton style={styles.button} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Cellular Data</Text>
                    <SwitchButton />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 100,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        color: '#723130'
    }
});

export default SettingsScreen;
