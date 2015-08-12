import React from 'react';
import ReactRouter, { Route } from 'react-router';

import Layout from './pages/layout';
import Home  from './pages/Home';

var routes = (
  <Route handler={Layout}>
    <Route path="/" handler={Home}/>
  </Route>
);

exports.start = () => {
  ReactRouter.run(routes, ReactRouter.HistoryLocation, (Root) => {
    React.render(<Root/>, document.getElementById('app'));
  });
};
