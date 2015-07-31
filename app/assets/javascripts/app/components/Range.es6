let React = require('react');

module.exports = React.createClass({
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      min: 0,
      max: 10000,
      step: 1
    };
  },

  render() {
    return (
      <input
        type="range"
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        onChange={this.props.onChange}
        />
    );
  }
});
