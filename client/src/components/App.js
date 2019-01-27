import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import MenuNav from "./MenuNav";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Three from "../pages/Three";

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
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/three" component={Three} />
          </div>
        </BrowserRouter>
     
    );
  }
}

export default connect(
  null,
  actions
)(App);
