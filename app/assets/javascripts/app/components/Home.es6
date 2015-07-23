((exports, React, Reflux, HomeStore, HomeActions) => {

  exports.Home = React.createClass({
    mixins: [Reflux.connect(HomeStore, 'time')],

    componentDidMount() {
      HomeActions.updateTime();
    },

    render() {
      let name = this.props.query.name || 'World'

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>It is currently {this.state.time}</p>
          <button onClick={HomeActions.updateTime}>Update</button>
        </div>
      );
    }
  });

})(window, React, Reflux, HomeStore, HomeActions);
