import { connect } from "react-redux";
import React, { Component } from "react";
import { Container, Button, Grid, Segment, Statistic } from "semantic-ui-react";
import PoseNet from "../components/PoseNet";
import YouTube from "../components/YouTube";
import Stats from "../components/Stats";
import SideMenu from "../components/SideMenu";
import Timer from "../components/Timer";
import {
  selectedOption,
  trackScore,
  checkActive,
  saveScore,
  getTime
} from "../actions";

class Dashboard extends Component {
  state = { active: 0, contentToSave: false };
  renderPointsTrackBoard() {
    return (
      <Segment inverted>
        <Statistic.Group widths="four" inverted>
          <Stats label="score" value={this.props.score} />
          <Stats label="timer" value={<Timer />} />
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
                {this.state.contentToSave ? (
                  <div>
                    <h3>Your score is {this.props.score}!</h3>
                    <Button
                      onClick={() => {
                        this.props.saveScore({
                          score: this.props.score,
                          videoSelected: this.props.videoSelected,
                          time: this.props.time
                        });
                        this.setState({ contentToSave: false });
                      }}
                      className="stopButton ui button primary"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <PoseNet />
                  </div>
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
          <div>
            {this.props.active === "out" ? (
              <Button
                onClick={this.onRestartButton}
                className="startButton ui button primary"
              >
                Restart
              </Button>
            ) : (
              <Button
                onClick={this.onStartButton}
                className="startButton ui button primary"
              >
                Start
              </Button>
            )}
          </div>
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
    await this.props.getTime("on");
  };

  onStopButton = async () => {
    await this.props.checkActive("out");
    await this.props.getTime("out");
    await this.setState({ contentToSave: true });
  };

  onPauseButton = async () => {
    await this.props.checkActive("pause");
  };

  onRestartButton = async () => {
    await this.props.trackScore(0);
    await this.props.checkActive("on");
    await this.props.getTime("on");
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
    active: state.active,
    time: state.time
  };
};
export default connect(
  mapStateProps,
  { selectedOption, trackScore, checkActive, saveScore, getTime }
)(Dashboard);
