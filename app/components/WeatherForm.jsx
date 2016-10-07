var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var city = this.refs.city.value;

    if (city.length > 0 ) {
      this.refs.city.value = '';
      this.props.onCitySubmit(city);
    }

  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Enter weather by city" ref="city"/>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
