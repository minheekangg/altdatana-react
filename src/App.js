import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from './components/welcome'
import NavBar from './components/navBar'

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/welcome" />} />
            <Route exact path="/welcome" component={Welcome} />
          </Switch>
        </Fragment>
    );
  }
}

export default App;
