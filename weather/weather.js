

const request = require("request");
var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/b8bccffdcc3c9b7aa1995329bce390ca/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log("Unable to connect to Forecast.io servers",undefined);
        } else if (!error && response.statusCode === 200) {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                Dank_memes: true
            });
        } else {
            callback("Unable to fetch weather data",undefined);
        }
    });
};

module.exports = {
  getWeather
};