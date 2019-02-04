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
  checkActive,
  saveScore
} from "../actions";

class Dashboard extends Component {
  state = { active: 0, contentToSave: false };
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
        <Grid celled>
          <Grid.Row>
            <Grid.Column>{this.renderPointsTrackBoard()}</Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>
                <PoseNet />
                {this.state.contentToSave ? (
                  <div>
                    <h3>{this.props.score}</h3>
                    <Button
                      onClick={() =>
                        this.props.saveScore({
                          score: this.props.score,
                          time: this.props.timer.time,
                          videoSelected: this.props.videoSelected
                        })
                      }
                      className="stopButton ui button primary"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div />
                )}

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
      <div style={{ marginTop: "2%" }}>
        {this.props.active === "on" ? (
          <div>
            {" "}
            <Button
              onClick={this.onPauseButton}
              className="pauseButton ui button primary"
            >
              Pause
            </Button>{" "}
            <Button
              onClick={this.onStopButton}
              className="stopButton ui button primary"
            >
              Stop
            </Button>
          </div>
        ) : (
          <Button
            onClick={this.onStartButton}
            className="startButton ui button primary"
          >
            Start
          </Button>
        )}
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
            <div className="centered">
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
    await this.props.trackScore(0);
    await this.props.checkActive("on");
    await this.props.runTimer();
  };

  onStopButton = async () => {
    await this.props.checkActive("out");
    await this.props.stopTimer();
    await this.setState({ contentToSave: true });
  };

  onPauseButon = async () => {
    await this.props.checkActive("pause");
    await this.props.pauseTimer();
  };

  onSaveButon = async () => {
    await this.props.checkActive("pause");
  };

  render() {
    return (
      <Grid>
        <Grid.Row style={{ paddingTop: "0" }}>
          <Grid.Column>
            <SideMenu />
          </Grid.Column>
          <Container>
            <div style={{ textAlign: "center", margin: "5%" }}>
              <h1>Dashboard</h1>
            </div>

            <Grid columns="equal" centerted>
              <Grid.Row>{this.renderList()}</Grid.Row>
            </Grid>
            {this.state.active === 0 ? (
              <h1 style={{ textAlign: "center", margin: "5%" }}>
                Click on a type of stretch to start!
              </h1>
            ) : (
              this.render_PoseNet_YouTube()
            )}
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}
const mapStateProps = state => {
  return {
    videos: state.videoArray,
    score: state.score,
    videoSelected: state.videoSelected.selection,
    timer: state.timer,
    activateTimer: state.timer.running,
    active: state.active
  };
};
export default connect(
  mapStateProps,
  { selectedOption, runTimer, trackScore, stopTimer, checkActive, saveScore }
)(Dashboard);
