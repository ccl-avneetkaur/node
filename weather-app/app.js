const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if(!address){
  console.log("Please provide an address");
}
else {
  geoCode(address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return console.log(error);
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}

