const request = require("request");
const yargs = require("yargs");

// var argv = yargs
//     .options({
//         adress: {
//             demand: true,
//             alias: "a",
//             string: true,
//             describe: "Address to fetch data from"
//         }
//
// })
//     .help()
//     .alias("help", "h")
//     .argv;

var geocodeAddress = address => {
    var urlString = `https://maps.googleapis.com/maps/api/geocode/json?address="${encodeURIComponent(address)}"`;
    return new Promise((resolve, reject) => {
        request({
            url: urlString,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect");
            } else if (body.status === "ZERO_RESULTS") {
                reject("No results");
            } else if (body.status === "OK") {
                resolve(body.results[0].formatted_address);

            }
        });
    });
};


geocodeAddress("19146").then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {
    console.log(error);
});