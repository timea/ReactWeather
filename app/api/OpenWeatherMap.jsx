var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0237fdf6320d86120ab14653015be8de&units=metric';

//0237fdf6320d86120ab14653015be8de

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(resOkay) {
      //debugger;
      if (resOkay.data.cod && resOkay.data.message) {
        throw new Error(resOkay.data.message)
      } else {
        return resOkay.data.main.temp;
      }
    }, function (resErr) {
      throw new Error(repErr.data.message)
    });
  }
}
