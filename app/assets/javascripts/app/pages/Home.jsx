import React from 'react/addons';
import Reflux from 'reflux';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

import Range from '../components/Range';

// NOTE: no way to do mixins sanely yet for es6 classes
const Home = React.createClass({
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

export default Home