(function(exports, React, ReactRouter) {
  var Route = ReactRouter.Route;
  var DefaultRoute = ReactRouter.DefaultRoute;

  var routes = (
    <Route handler={App}>
      <Route path="/" handler={Home}/>
    </Route>
  );

  ReactRouter.run(routes, ReactRouter.HistoryLocation, (Root) => {
    React.render(<Root/>, document.getElementById('app'));
  });

})(window, React, ReactRouter);
