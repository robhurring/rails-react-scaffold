let React = require('react/addons');
let Reflux = require('reflux');
let HomeStore = require('../stores/HomeStore');
let HomeActions = require('../actions/HomeActions');

module.exports = React.createClass({
  mixins: [
    Reflux.connect(HomeStore, 'time'),
    React.addons.LinkedStateMixin
  ],

  getInitialState() {
    return {
      format: '%m/%d/%Y %I:%M:%S.%L',
      goingCrazy: false
    };
  },

  componentDidMount() {
    this.update();
  },

  update() {
    HomeActions.updateTime(this.state.format);
  },

  goCrazy() {
    if(this.state.goingCrazy) {
      this.setState({goingCrazy: false});
      clearInterval(this.crazyInterval);
    } else {
      this.setState({goingCrazy: true});
      this.crazyInterval = setInterval(() => {
        this.update();
      }, 100);
    }
  },

  render() {
    let crazyButtonLabel = this.state.goingCrazy ? 'Chill out!' : 'Go something something';
    let crazyButton = (
      <button onClick={this.goCrazy}>{crazyButtonLabel}</button>
    );

    return (
      <div>
        <p>It is currently {this.state.time}</p>
        <input type="text" ref="format" valueLink={this.linkState('format')} />
        <button onClick={this.update}>Update</button>
        {crazyButton}
      </div>
    );
  }
});
