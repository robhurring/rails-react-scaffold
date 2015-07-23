((exports, Reflux, HomeActions, request) => {

  exports.HomeStore = Reflux.createStore({
    listenables: [HomeActions],

    time: null,

    init() {
      this.onUpdateTime();
    },

    onUpdateTime(format) {
      request({url: '/time', data: {format: format}}).then((data) => {
          this.time = data;
        }, (data) => {
          this.time = `ERROR: ${data.error}]`;
        })
        .then(() => {
          this.trigger(this.time);
        })
    }
  });

})(window, Reflux, HomeActions, request);