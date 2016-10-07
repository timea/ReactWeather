var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleCitySubmit: function (city) {
    var that = this;

    this.setState({
      isLoading: true
    });
    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      //alert(errorMessage);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {
    var {isLoading, temp, city, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && city){
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">How is the weather?</h1>
        <WeatherForm onCitySubmit={this.handleCitySubmit}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
