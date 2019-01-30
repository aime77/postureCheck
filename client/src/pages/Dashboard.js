import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";

class Dashboard extends Component {
  state = { option: "5", term:"hello" };

  renderPopulationKids() {
    return (
      <Container>
        <h1>kids</h1>
         <PoseNet />
        <YouTube term={this.state.term} />
      </Container>
    );
  }

  renderPopulationOffice() {
    return (
      <Container>
        <YouTube term={this.state.term} />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationBackPain() {
    return (
      <Container>
        <YouTube term={this.state.term} />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationGeneral() {
    return (
      <Container>
        <YouTube term={this.state.term}  />
        <PoseNet />
      </Container>
    );
  }
  renderPopulationChallenging() {
    return (
      <Container>
        <YouTube term={this.state.term}  />
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
      this.setState({option:"stretching for kids"});
       return this.renderPopulationKids();

      case "2":
      this.setState({option:"stretching for office"});
       return this.renderPopulationOffice();

      case "3":
      this.setState({option:"stretching for back pain"});
        return this.renderPopulationBackPain();
        
      case "4":
      this.setState({option:"yoga stretches"});
        return this.renderPopulationChallenging();

      case "5":
      this.setState({option:"stretch"});
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
