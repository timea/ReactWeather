var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>Thank you for checking out my weather app!</p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react/">React</a> -  JS framework
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - FE framework
          </li>
          <li>
            <a href="https://babeljs.io/">Babel</a> - transpiling
          </li>
          <li>
            <a href="https://webpack.github.io/">Webpack</a> - bundling
          </li>
          <li>
            <a href="https://openweathermap.org/"> Open Weather Map</a> - API called for weather information
          </li>
        </ul>
        <p>You can check the code under the hood in our
          <a href='https://github.com/timea/ReactWeather'> GitHub repo</a>
        </p>
      </div>
    )
};

module.exports = About;
