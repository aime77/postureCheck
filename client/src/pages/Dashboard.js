import { connect } from "react-redux";
import React, { Component } from "react";
import { Container, Button, Grid } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";
import { selectedOption } from "../actions";

class Dashboard extends Component {
  state = { active: 0, option: null };

  renderBoth() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <PoseNet />
          </Grid.Column>
          <Grid.Column>
            <YouTube />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  renderDefault() {
    return <PoseNet />;
  }

  onClickSelect = () => {
    this.setState({ active: Math.random() });
  };

  renderList() {
    return this.props.videos.map(video => {
      return (
        <div className="selection" key={video.selection}>
          <div className="right floated content">
            <Button
              className="ui button primary"
              onClick={() => {
                this.props.selectedOption(video);
                this.onClickSelect();
              }}
            >
              Select
            </Button>
          </div>
          <div className="content">{video.selection}</div>
        </div>
      );
    });
  }

  renderDashboard() {}

  renderSwitch() {
    switch (this.props.videos) {
      case "1":
        this.setState({ option: "stretching for kids" });
        return this.renderPopulationKids();

      case "2":
        this.setState({ option: "stretching for office" });
        return this.renderPopulationOffice();

      case "3":
        this.setState({ option: "stretching for back pain" });
        return this.renderPopulationBackPain();

      case "4":
        this.setState({ option: "yoga stretches" });
        return this.renderPopulationChallenging();

      case "5":
        this.setState({ option: "stretch" });
        return this.renderPopulationGeneral();

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
        {this.renderList()}
        {this.state.active === 0 ? <h1>"not yet"</h1> : this.renderBoth()}
        {this.state.active ? this.renderDashboard() : this.renderSwitch()}
      </Container>
    );
  }
}
function mapStateProps(state) {
  return { videos: state.videoArray };
}
export default connect(
  mapStateProps,
  { selectedOption }
)(Dashboard);
