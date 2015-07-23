((exports, React, RouteHandler) => {

  exports.App = React.createClass({
    render() {
      return (
        <section>
          <Header/>
          <RouteHandler/>
        </section>
      );
    }
  });

})(window, React, ReactRouter.RouteHandler);
