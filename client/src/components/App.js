import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import MenuNav from "./MenuNav";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import YouTube from "./YouTube";
import FormNew from "./FormNew";
import SideMenu from "./SideMenu";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <MenuNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard}  />
          <Route exact path="/youTube" component={YouTube} />
          <Route exact path="/form" component={FormNew} />
          <Route exact path="/messenger" component={FormNew} />
          <Route exact path="/stats" component={FormNew} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
