let Reflux = require('reflux');
let HomeActions = require('../actions/HomeActions');
let request = require('../../api').request;

module.exports = Reflux.createStore({
  listenables: [HomeActions],

  time: null,

  init() {
  },

  onUpdateTime(format) {
    request({url: '/time', data: {format: format}}).then((data) => {
        this.time = data;
      }, (data) => {
        this.time = `ERROR: ${data.error}]`;
      })
      .then(() => {
        this.trigger(this.time);
      });
  }
});
