import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Menu from "./Menu";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
