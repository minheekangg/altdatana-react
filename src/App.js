import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import Welcome from './components/welcome';
import NavBar from './components/navbar';
import About from './components/about';
import Products from './components/products';
import Dashboard from './components/dashboard';
import HowItWorks from './components/how-it-works';
import Footer from './components/footer';
import ScrollIntoView from './components/scroll-into-view';
import Login from './components/login';
import SignUp from './components/signup';

import { ROUTE_ROOT } from './utils/constants';

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavBar />
          <ScrollIntoView>
            <Switch>
              {/* <Route exact path={`${ROUTE_ROOT}/`} render={() => <Redirect to={`${ROUTE_ROOT}/welcome`} />} /> */}
              <Route exact path={`${ROUTE_ROOT}/`} component={Welcome} />
              <Route exact path={`${ROUTE_ROOT}/about`} component={About} />
              <Route exact path={`${ROUTE_ROOT}/how-it-works`} component={HowItWorks} />
              <Route exact path={`${ROUTE_ROOT}/products`} component={Products} />
              <Route exact path={`${ROUTE_ROOT}/dashboard`} component={Dashboard} />
              <Route exact path={`${ROUTE_ROOT}/login`} component={Login} />
              <Route exact path={`${ROUTE_ROOT}/signup`} component={SignUp} />
            </Switch>
          </ScrollIntoView>
          <Footer/>
        </Fragment>
    );
  }
}

export default App;
