const axios = require('axios');

const baseURL = "https://maps.googleapis.com/maps/api/directions/json";
const originLatLong = "29.460987,-98.482356";
const destinationLatLong = "29.463259,-98.482488";
const apiKey = "AIzaSyBWZJ_hTM78RKil6GW-aBtqOf0DoNWwmcY";
const dirMode = "walking";

axios.get(baseURL, {
    params: {
        origin: originLatLong,
        destination: destinationLatLong,
        key: apiKey,
        mode: dirMode
    }
})
.then(function (response) {
    console.log(response.data.routes[0].bounds);
    console.log(response.data.routes[0].legs);
    console.log(response.data.routes[0].legs[0].steps);
    console.log(response.data.routes[0].overview_polyline);
})
.catch(function (error) {
    console.log(error);
});