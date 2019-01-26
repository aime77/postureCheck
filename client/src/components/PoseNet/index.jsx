import * as posenet from "@tensorflow-models/posenet";
import * as React from "react";
import { isMobile, drawKeypoints, drawSkeleton } from "./utils";
import "./posenet.css";
import StartButton from "../StartButton";
import Buttons from "../Buttons";
import DropdownSelector from "../Dropdown";
import Stats from "../Stats";
import { Grid } from "semantic-ui-react";

export default class PoseNet extends React.Component {
  static defaultProps = {
    videoWidth: 600,
    videoHeight: 500,
    flipHorizontal: true,
    algorithm: "single-pose",
    mobileNetArchitecture: isMobile() ? 0.5 : 1.01,
    showVideo: true,
    showSkeleton: true,
    showPoints: true,
    minPoseConfidence: 0.1,
    minPartConfidence: 0.5,
    maxPoseDetections: 2,
    nmsRadius: 20.0,
    outputStride: 16,
    imageScaleFactor: 0.5,
    skeletonColor: "aqua",
    skeletonLineWidth: 2,
    loadingText: "Loading pose detector..."
  };

  constructor(props) {
    super(props, PoseNet.defaultProps);
    this.state = { loading: true };
    this.state = { displayCamera: false };
    this.state = { timer: null };
    this.state = { counter: 0 };
  }

  getCanvas = elem => {
    this.canvas = elem;
  };

  getVideo = elem => {
    this.video = elem;
  };

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  async componentWillMount() {
    // Loads the pre-trained PoseNet model
    this.net = await posenet.load(this.props.mobileNetArchitecture);
  }

  async componentDidMount() {
    // let timer = await setInterval(this.tick, 1000);
    // this.setState({ timer });
  }

  async componentWillUnmount() {
    // await this.clearInterval(this.state.timer);
  }

  async setupCamera() {
    // MDN: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw "Browser API navigator.mediaDevices.getUserMedia not available";
    }

    const { videoWidth, videoHeight } = this.props;
    const video = this.video;
    const mobile = isMobile();

    video.width = videoWidth;
    video.height = videoHeight;

    // MDN: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user",
        width: mobile ? void 0 : videoWidth,
        height: mobile ? void 0 : videoHeight
      }
    });

    video.srcObject = stream;

    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        // Once the video metadata is ready, we can start streaming video
        video.play();
        resolve(video);
      };
    });
  }

  detectPose() {
    const { videoWidth, videoHeight } = this.props;
    const canvas = this.canvas;
    const ctx = canvas.getContext("2d");

    canvas.width = videoWidth;
    canvas.height = videoHeight;

    this.poseDetectionFrame(ctx);
  }

  poseDetectionFrame(ctx) {
    const {
      algorithm,
      imageScaleFactor,
      flipHorizontal,
      outputStride,
      minPoseConfidence,
      maxPoseDetections,
      minPartConfidence,
      nmsRadius,
      videoWidth,
      videoHeight,
      showVideo,
      showPoints,
      showSkeleton,
      skeletonColor,
      skeletonLineWidth
    } = this.props;

    const net = this.net;
    const video = this.video;

    const poseDetectionFrameInner = async () => {
      let poses = [];

      switch (algorithm) {
        case "single-pose":
          const pose = await net.estimateSinglePose(
            video,
            imageScaleFactor,
            flipHorizontal,
            outputStride
          );

          console.log(pose);
          poses.push(pose);

          break;
        case "multi-pose":
          poses = await net.estimateMultiplePoses(
            video,
            imageScaleFactor,
            flipHorizontal,
            outputStride,
            maxPoseDetections,
            minPartConfidence,
            nmsRadius
          );

          break;
      }

      ctx.clearRect(0, 0, videoWidth, videoHeight);

      if (showVideo) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-videoWidth, 0);
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
        ctx.restore();
      }

      // For each pose (i.e. person) detected in an image, loop through the poses
      // and draw the resulting skeleton and keypoints if over certain confidence
      // scores
      poses.forEach(({ score, keypoints }) => {
        if (score >= minPoseConfidence) {
          console.log(score);
          if (showPoints) {
            drawKeypoints(keypoints, minPartConfidence, skeletonColor, ctx);
          }
          if (showSkeleton) {
            drawSkeleton(
              keypoints,
              minPartConfidence,
              skeletonColor,
              skeletonLineWidth,
              ctx
            );
          }
        }
      });

      requestAnimationFrame(poseDetectionFrameInner);
    };

    poseDetectionFrameInner();
  }

  onStartButton = async () => {
    await this.setState({ displayCamera: true });

    try {
      await this.setupCamera();
    } catch (e) {
      throw "This browser does not support video capture, or this device does not have a camera";
    } finally {
      this.setState({ loading: false });
    }

    this.detectPose();
    let timer = await setInterval(this.tick, 1000);
    this.setState({ timer });
  };

  onStopButton = async () => {
    await clearInterval(this.state.timer);
    await this.setState({ displayCamera: false });
  };

  onPauseButon = () => {};

  render() {
    const loading = this.state.loading ? (
      <div className="PoseNet__loading">{this.props.loadingText}</div>
    ) : (
      ""
    );
    return (
      <div>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Stats label="level" value={<DropdownSelector />} />
            </Grid.Column>
            <Grid.Column>
              <Stats label="score" value="77" />
            </Grid.Column>

            <Grid.Column>
              {this.state.counter >= 10 ? (
                <Stats label="timer" value={`00:${this.state.counter}`} />
              ) : (
                <Stats label="timer" value={`00:0${this.state.counter}`} />
              )}
              
            </Grid.Column>
            <Grid.Column>
              <Stats label="poses #" value="3" />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {this.state.displayCamera ? (
          <div>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Buttons onClick={this.onPauseButton} className="pauseButton">
                    Pause
                  </Buttons>
                  <Buttons onClick={this.onStopButton} className="stopButton">
                    Stop
                  </Buttons>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="PoseNet">
              {loading}
              <video playsInline ref={this.getVideo} />
              <canvas ref={this.getCanvas} />
            </div>

            {/* <div>Loading{"...".substr(0, this.state.counter % 3 + 1)}</div> */}
          </div>
        ) : (
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <StartButton onClick={this.onStartButton} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}
