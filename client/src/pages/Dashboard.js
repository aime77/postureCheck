import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Segments from "../components/Segments";
import Container from "../components/Container";
import StartButton from "../components/StartButton";
import Stats from "../components/Stats";


class Dashboard extends Component {
  render() {
    return (
      <Container>
          <div style={{ textAlign: "center" }}>
          <h1>User Dashboard</h1>
        </div>
          <Stats/>
        
        <Segments />
        <StartButton/>
      </Container>
    );
  }
}

export default Dashboard;
