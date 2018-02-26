const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather");
const axios = require("axios");
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            string: true
        }

    })
    .help()
    .alias("help", "h")
    .argv;


var urlString = `https://maps.googleapis.com/maps/api/geocode/json?address="${encodeURIComponent(argv.address)}"`;

axios.get(urlString).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error("Sorry");
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var url = `https://api.darksky.net/forecast/b8bccffdcc3c9b7aa1995329bce390ca/${lat},${lng}`;
    console.log(response.data);
    return axios.get(url);

}).then((response) => {
    console.log(JSON.stringify({
        temperature: response.data.currently.temperature
    },undefined,2));
}).catch((e) => {
    if (e.code === "ENOTFOUND" || e.code === "ECONNREFUSED") {
        console.log("Unable to connect to API servers")
    }
});
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         weather.getWeather(results.latitude, results.lng, (errorMessage, weather) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(JSON.stringify({
//                     address: results.address,
//                     temperature: weather.temperature,
//                     apparentTemperature: weather.apparentTemperature
//                 },undefined,2));
//             }
//         });
//
//     }
//
// });

//lat,lnt,callback


// b8bccffdcc3c9b7aa1995329bce390ca