var React = require('react');
var {Link} = require('react-router');
var Examples = () => {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?city=New%20York'>New York, NY</Link>
          </li>
          <li>
            <Link to='/?city=Rio'>Rio, Brazil </Link>
          </li>
        </ol>
      </div>
    )
};


module.exports = Examples;
