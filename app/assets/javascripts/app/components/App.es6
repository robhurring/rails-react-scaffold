let React = require('react');
let RouteHandler = require('react-router').RouteHandler;
let Header = require('./Header');

module.exports = React.createClass({
  render() {
    return (
      <section>
        <Header/>
        <RouteHandler/>
      </section>
    );
  }
});
