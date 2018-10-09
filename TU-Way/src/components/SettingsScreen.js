import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchButton from './SwitchButton';
import { Font } from 'expo';
import { Header, Left, Right, Icon} from 'native-base'

export class SettingsScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor})=> (
                <Icon name="settings" style={{fontSize: 24, color: tintColor}} />
        )
    }

    componentDidMount() {
      Font.loadAsync({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
      });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>
                            this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
                <View style={styles.row}>
                    <Text style={styles.text}>Push Notifications</Text>
                        <SwitchButton style={styles.button}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Cellular Data</Text>
                        <SwitchButton />
                </View>
            </View>
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
    button: {

    },
    text: {
        fontSize: 20,
        color: '#800000'
    }
});

export default SettingsScreen;