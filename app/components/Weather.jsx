var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      errorMessage: undefined,
      city: '',
      temp: ''
    }
  },
  handleCitySubmit: function (city) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });
    OpenWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var city = this.props.location.query.city;

    if (city && city.length > 0) {

      this.handleCitySubmit(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var city = newProps.location.query.city;

    if (city && city.length > 0) {
      console.log(city);
      this.handleCitySubmit(city);
      window.location.hash = '#/';
    }
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
