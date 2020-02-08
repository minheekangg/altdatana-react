import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from './components/welcome';
import NavBar from './components/navBar';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/welcome" />} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/how-it-works" component={HowItWorks} /> */}
            {/* <Route exact path="/products" component={Products} /> */}
          </Switch>
        </Fragment>
    );
  }
}

export default App;
