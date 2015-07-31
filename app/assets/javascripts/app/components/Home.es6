let React = require('react/addons');
let Reflux = require('reflux');
let HomeStore = require('../stores/HomeStore');
let HomeActions = require('../actions/HomeActions');
let Range = require('./Range');

module.exports = React.createClass({
  mixins: [
    Reflux.connect(HomeStore, 'time'),
    React.addons.LinkedStateMixin
  ],

  getInitialState() {
    return {
      format: '%m/%d/%Y %I:%M:%S.%L %N',
      goingCrazy: false,
      delay: 1000
    };
  },

  componentDidMount() {
    this.update();
  },

  update() {
    HomeActions.updateTime(this.state.format);
  },

  goCrazy() {
    this.setState({goingCrazy: !this.state.goingCrazy})
  },

  updateDelay(event) {
    this.setState({delay: event.target.value});
  },

  updateCrazy() {
    if(this.crazyInterval) {
      clearInterval(this.crazyInterval);
    }

    if(this.state.goingCrazy) {
      this.crazyInterval = setInterval(() => {
        this.update();
      }, this.state.delay);
    }
  },

  render() {
    this.updateCrazy();

    let crazyButtonLabel = this.state.goingCrazy ? 'Chill out!' : 'Go something something';
    let crazyButton = (
      <button onClick={this.goCrazy}>{crazyButtonLabel}</button>
    );

    return (
      <div>
        <p>It is currently {this.state.time}</p>
        <input type="text" ref="format" valueLink={this.linkState('format')} />&nbsp;
        <button onClick={this.update}>Update</button>

        <p>
          Delay: {this.state.delay}<br/>
          <Range min={1} max={1000} onChange={this.updateDelay} />
        </p>

        {crazyButton}
      </div>
    );
  }
});
