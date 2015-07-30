let React = require('react');
let ReactRouter = require('react-router');
let Route = ReactRouter.Route;

let App = require('./components/App');
let Home = require('./components/Home');

var routes = (
  <Route handler={App}>
    <Route path="/" handler={Home}/>
  </Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'));
});
