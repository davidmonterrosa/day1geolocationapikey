import { APIKEY } from "./environment";

// Built in api that allows the user to get their location

// navigator returns the geolocation object
// getCurrentPosition() returns teh current position of the user

navigator.geolocation.getCurrentPosition( success );
// Think of this as an if-else statement. (If the user accepts it is succesful, if not it is an error)

// Example of geolocation object
{
    coords: {
        latitude: 37.7749;
        longitude: -122.4194;
    }
}

function success(position) {
    console.log(position);
    console.log("Our latitude is: " + position.coords.latitude);
    console.log("Our longitude is: " + position.coords.longitude);
    console.log("Now we know where you are!");
}

function errorFunc(error) {
    console.log(error.message)
}

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall();

success();