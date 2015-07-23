((exports, Reflux, HomeActions, request) => {

  exports.HomeStore = Reflux.createStore({
    listenables: [HomeActions],

    time: null,

    init() {
      this.onUpdateTime();
    },

    onUpdateTime() {
      request('/time').then((data) => {
          this.time = data;
        }, (err) => {
            this.time = 'ERROR!';
        })
        .then(() => {
          this.trigger(this.time);
        })
    }
  });

})(window, Reflux, HomeActions, request);