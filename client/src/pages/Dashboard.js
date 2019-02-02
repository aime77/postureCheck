import { connect } from "react-redux";
import React, { Component } from "react";
import { Container, Button, Grid, Segment } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";
import Stats from "../components/Stats";
import { selectedOption } from "../actions";

class Dashboard extends Component {
  state = { active: 0, option: null };
  renderPointsTrackBoard() {
    return (
      <Grid columns="equal" centered>
        <Grid.Row>
          <Grid.Column>
            <Stats label="score" value={this.props.score} />
          </Grid.Column>

          {/* <Grid.Column>
            {this.state.counter >= 10 ? (
              <Stats label="timer" value={`00:${this.state.counter}`} />
            ) : (
              <Stats label="timer" value={`00:0${this.state.counter}`} />
            )}
          </Grid.Column> */}
          <Grid.Column>
            <Stats label="" value={this.props.videoSelected} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  render_PoseNet_YouTube() {
    return (
      <Grid stackable columns={2}>
        {this.renderPointsTrackBoard()}
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <PoseNet />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <YouTube />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  onClickSelect = () => {
    this.setState({ active: Math.random() });
  };

  renderList() {
    return this.props.videos.map(video => {
      return (
        <Grid.Column>
          <div className="selection" key={video.selection}>
            <div className="right floated ">
              <Button
                className="ui button primary"
                onClick={() => {
                  this.props.selectedOption(video);
                  this.onClickSelect();
                }}
              >
                {video.selection}
              </Button>
            </div>
            <div className="content" />
          </div>
        </Grid.Column>
      );
    });
  }

  renderDefault() {}

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
        <div style={{ textAlign: "center", margin: "5%" }}>
          <h1>Dashboard</h1>
        </div>
        <Grid columns="equal">
          <Grid.Row>{this.renderList()}</Grid.Row>
        </Grid>
        {this.state.active === 0 ? (
          <h1>"not yet"</h1>
        ) : (
          this.render_PoseNet_YouTube()
        )}
      </Container>
    );
  }
}
function mapStateProps(state) {
  return {
    videos: state.videoArray,
    score: state.score,
    videoSelected: state.videoSelected.selection
  };
}
export default connect(
  mapStateProps,
  { selectedOption }
)(Dashboard);
