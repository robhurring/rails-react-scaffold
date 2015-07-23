((exports, Reflux, HomeActions) => {

  exports.HomeStore = Reflux.createStore({
    listenables: [HomeActions],

    time: null,

    init() {
      this.time = +new Date();
    },

    onUpdateTime() {
      this.time = +new Date();
      this.trigger(this.time);
    }
  });

})(window, Reflux, HomeActions);