import React from 'react';

export default class Range extends React.Component {
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
}

Range.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired
};

Range.defaultProps = {
  min: 0,
  max: 10000,
  step: 1
};
