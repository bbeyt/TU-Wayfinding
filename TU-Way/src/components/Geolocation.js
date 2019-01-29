import React, { Component } from 'react';
import { Constants, Location, Permissions } from 'expo';
import MapView from "react-native-maps"

export default class App extends Component {
  geoState = {
    location: { coords: {latitude: 0, longitude: 0}},
  };

  componentWillMount() {
      this._getLocationAsync();
    
  }


  async _getLocationAsync() {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    Location.watchPositionAsync({enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}, this.locationChanged);
  }
  
  locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
    this.setState({location, region})
  }

  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          showsUserLocation={true}
          region={this.state.region}
        />
    );
  }
}

Expo.registerRootComponent(App);