import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from './loading/index';

const Login = Loadable({
  loader: () => import('./login/index'),
  loading: Loading,
});

const routes = [
  {
    path: "/login",
    component: Login
  },
];

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
