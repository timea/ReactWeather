var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleCitySubmit: function (city) {
    var that = this;

    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function () {
    var {isLoading, temp, city} = this.state;
    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && city){
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onCitySubmit={this.handleCitySubmit}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
