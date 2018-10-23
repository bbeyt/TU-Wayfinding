import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import MapView from "react-native-maps"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,

         });
       },
       (error) => this.setState({ error: error.message }),
       /*enableHighAccuracy - false: uses wifi; True: uses gps;*/
       { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
     );
   }


   componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }


  render() {
    return (
      <View style= {styles.container}>
      {/*followUserLocation ={true}*/}
      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{
          "latitude":this.state.latitude,
          "longitude":this.state.longitude}}
       />}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;