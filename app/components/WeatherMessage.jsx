var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
      <h1 className="text-center">It is {temp} in {city}</h1>
    );
}


module.exports = WeatherMessage;
