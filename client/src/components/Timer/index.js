import React, { Component } from "react";
import { connect } from "react-redux";
import { checkActive, getTime } from "../../actions";
import TimerMachine from "react-timer-machine";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

class Timer extends Component {
  state = {
    paused: false,
    started: false,
    countdown: false
  };

  componentWillReceiveProps() {
    if (this.props.active === "startClock") {
      this.toggleStartTimer();
    }
    if (this.props.time === "out" || this.props.active === "on") {
      this.toggleTimer();
    }
  }
  componentDidMount() {
    this.props.checkActive("startClock");
  }

  toggleStartTimer = () => {
    this.setState({
      started: true
    });
  };

  toggleStopperTimer = () => {
    this.setState({
      started: false
    });
    
  };

  toggleTimer = () => {
    this.setState({
      paused: true
    });
  };

  toggleCountdown = () => {
    this.setState({
      countdown: true
    });
  };

  render() {
    const { started, paused, countdown } = this.state;

    return (
      <div>
        <span className="timer">
          <TimerMachine
            timeStart={0 * 1000}
            started={started}
            paused={paused}
            countdown={countdown}
            interval={1000}
            formatTimer={(time, ms) =>
              moment.duration(ms, "milliseconds").format("h:mm:ss")
            }
            onStart={time =>
              console.info(`Timer started: ${JSON.stringify(time)}`)
            }
            onStop={time =>
              console.info(`Timer stopped: ${JSON.stringify(time)}`)
            }
            onTick={time =>
              console.info(`Timer ticked: ${JSON.stringify(time)}`)
            }
            onPause={time =>
              console.info(`Timer ticked: ${JSON.stringify(time)}`)
            }
            onResume={time =>
              console.info(`Timer resumed: ${JSON.stringify(time)}`)
            }
            onComplete={time =>
              console.info(`Timer completed: ${JSON.stringify(time)}`)
            }
          />
        </span>
      </div>
    );
  }
}

const mapStateProps = state => {
  console.log(state.active);
  return {
    active: state.active,
    time:state.time
  };
};
export default connect(
  mapStateProps,
  { checkActive, getTime }
)(Timer);
