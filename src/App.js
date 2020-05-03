import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import Welcome from './components/welcome';
import NavBar from './components/navBar';
import About from './components/about';
import Products from './components/products';
import Dashboard from './components/dashboard';
import HowItWorks from './components/how-it-works';

import { ROUTE_ROOT } from './utils/constants';

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavBar />
          <Switch>
            {/* <Route exact path={`${ROUTE_ROOT}/`} render={() => <Redirect to={`${ROUTE_ROOT}/welcome`} />} /> */}
            <Route exact path={`${ROUTE_ROOT}/`} component={Welcome} />
            <Route exact path={`${ROUTE_ROOT}/about`} component={About} />
            <Route exact path={`${ROUTE_ROOT}/how-it-works`} component={HowItWorks} />
            <Route exact path={`${ROUTE_ROOT}/products`} component={Products} />
            <Route exact path={`${ROUTE_ROOT}/dashboard`} component={Dashboard} />
          </Switch>
        </Fragment>
    );
  }
}

export default App;
