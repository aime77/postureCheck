import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";

class Dashboard extends Component {
  state = { option: null };

  renderPopulationKids() {
    return (
      <Container>
        <h1>kids</h1>
         <PoseNet />
        <YouTube />
      </Container>
    );
  }

  renderPopulationOffice() {
    return (
      <Container>
        <YouTube term="office stretches" />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationBackPain() {
    return (
      <Container>
        <YouTube term="back pain stretches" />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationGeneral() {
    return (
      <Container>
        <YouTube term="stretches" />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationChallenging() {
    return (
      <Container>
        <YouTube term="yoga stretches" />
        <PoseNet />
      </Container>
    );
  }
  renderDefault() {
    return <PoseNet />;
  }

  renderSwitch() {
    console.log(this.state.option)
    switch (this.state.option) {
      case "1":
       return this.renderPopulationKids();

      case "2":
       return this.renderPopulationOffice();

      case "3":
        return this.renderPopulationBackPain();
        

      case "4":
        return this.renderPopulationChallenging();

      case "5":
       return  this.renderPopulationGeneral();

      default:
       return this.renderDefault();
    }
  }
  render() {
    return (
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1>Dashboard</h1>
        </div>
        {this.renderSwitch()}
      </Container>
    );
  }
}

export default Dashboard;
