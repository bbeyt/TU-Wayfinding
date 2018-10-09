import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Header, Left, Right, Icon} from 'native-base'


class MapScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor})=> (
                <Icon name="home" style={{fontSize: 24, color: tintColor}} />
            )
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
                <MapView
                    style={{flex: 1}}
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

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})