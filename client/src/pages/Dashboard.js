import { connect } from "react-redux";
import React, { Component } from "react";
import { Container, Button, Grid, Segment, Statistic } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";
import Stats from "../components/Stats";
import SideMenu from "../components/SideMenu";
import {
  selectedOption,
  runTimer,
  stopTimer,
  trackScore,
  checkActive
} from "../actions";

class Dashboard extends Component {
  renderPointsTrackBoard() {
    return (
      <Segment inverted>
        <Statistic.Group widths="four" inverted>
          <Stats label="score" value={this.props.score} />
          <Stats label="timer" value={this.props.timer.time} />
          <Stats label="stretch type" value={this.props.videoSelected} />
        </Statistic.Group>
      </Segment>
    );
  }
  render_PoseNet_YouTube() {
    return (
      <div style={{ marginTop: "5%" }}>
        {this.renderPointsTrackBoard()}
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <PoseNet />
                {this.renderButtons()}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <YouTube />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  renderButtons() {
    return (
      <div>
        <Button
          onClick={this.onStartButton}
          className="startButton ui button primary"
        >
          Start
        </Button>
        <Button
          onClick={this.onPauseButton}
          className="pauseButton ui button primary"
        >
          Pause
        </Button>
        <Button
          onClick={this.onStopButton}
          className="stopButton ui button primary"
        >
          Stop
        </Button>
      </div>
    );
  }

  onClickSelect = () => {
    this.setState({ active: Math.random() });
  };

  renderList() {
    return this.props.videos.map(video => {
      return (
        <Grid.Column key={video.setKey}>
          <div className="selection">
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
            <div />
          </div>
        </Grid.Column>
      );
    });
  }

  onStartButton = async () => {
    this.props.checkActive("2");
    this.props.runTimer();
  };

  onStopButton = async () => {
    await this.props.trackScore(0);
    await this.props.checkActive("3");
    await this.props.stopTimer();
  };

  onPauseButon = async (ctx, video) => {};

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <SideMenu />
          </Grid.Column>
          <Container>
            <div style={{ textAlign: "center", margin: "5%" }}>
              <h1>Dashboard</h1>
            </div>
            <Grid columns="equal">
              <Grid.Row>{this.renderList()}</Grid.Row>
            </Grid>
            {this.state.active === 0 ? (
              <h1 style={{ textAlign: "center", margin: "2%" }}>
                "Click on a type of stretch to start!"
              </h1>
            ) : (
              <div>{this.render_PoseNet_YouTube()}</div>
            )}
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateProps=(state)=> {
  console.log(state);
  return {
    videos: state.videoArray,
    score: state.score,
    videoSelected: state.videoSelected.selection,
    timer: state.timer,
    activateTimer: state.timer.running,
    active: state.active
  };
}
export default connect(
  mapStateProps,
  { selectedOption, runTimer, trackScore, stopTimer, checkActive }
)(Dashboard);


