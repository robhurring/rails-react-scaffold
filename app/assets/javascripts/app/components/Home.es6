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
      format: '%m/%d/%Y %I:%M:%S'
    }
  },

  componentDidMount() {
    this.update()
  },

  update() {
    HomeActions.updateTime(this.state.format)
  },

  render() {
    return (
      <div>
        <p>It is currently {this.state.time}</p>
        <input type="text" ref="format" valueLink={this.linkState('format')} />
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
});
