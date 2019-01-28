import * as posenet from "@tensorflow-models/posenet";
import * as React from "react";
import { isMobile, drawKeypoints, drawSkeleton } from "./utils";
import "./posenet.css";
import StartButton from "../StartButton";
import Buttons from "../Buttons";
import PoseExample from "../PoseExample";
import posture1 from "../../images/p1-oh.jpg";
import posture2 from "../../images/p2-ra.jpg";
import posture3 from "../../images/p1-oh.jpg";
import posture4 from "../../images/p2-ra.jpg";

import DropdownSelector from "../Dropdown";
import Stats from "../Stats";
import { Grid, Image } from "semantic-ui-react";
import * as calculations from "../../utils/calculations";

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
    this.state = {
      displayCamera: false,
      timer: null,
      counter: 0,
      scorePoints: 0,
      currentPose: "right tricept stretch",
      loading: true,
      posture: posture1
    };
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
    this.net = await posenet.load(this.props.mobileNetArchitecture);
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

      const changePose = async pose => {
        switch (this.state.currentPose) {
          case "right tricept stretch":
            await this.setState({
              scorePoints:
                this.state.scorePoints + calculations.rightTricepStretch(pose)
            });

            if (this.state.scorePoints > 5) {
              await this.setState({ scorePoints: 0 });
              await this.setState({ currentPose: "left tricept stretch" });
              await this.setState({ posture: posture1 });
            }

            break;

          case await "left tricept stretch":
            this.setState({
              scorePoints:
                this.state.scorePoints + calculations.leftTricepStretch(pose)
            });
            if (this.state.scorePoints > 6.8) {
              this.setState({ scorePoints: 0 });
              this.setState({ currentPose: "open heart" });
              this.setState({ posture: posture2 });
            }
            break;

          case await "open heart":
            this.setState({
              scorePoints: this.state.scorePoints + calculations.openHeart(pose)
            });
            if (this.state.scorePoints > 5.2) {
              this.setState({ scorePoints: 0 });
              this.setState({ currentPose: "raise arms" });
              this.setState({ posture: posture3 });
            }
            break;

          case await "raise arms":
            this.setState({
              scorePoints: this.state.scorePoints + calculations.raiseArms(pose)
            });
            if (this.state.scorePoints > 9.17) {
              this.setState({ scorePoints: 0 });
              this.setState({ currentPose: null });
              this.setState({ posture: posture4 });
              await clearInterval(this.state.timer);
              await this.setState({ counter: 0 });
            }
            break;

          default:
        }
      };
      switch (algorithm) {
        case "single-pose":
          const pose = await net.estimateSinglePose(
            video,
            imageScaleFactor,
            flipHorizontal,
            outputStride
          );

          poses.push(pose);

          changePose(pose);
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

        default:
      }

      ctx.clearRect(0, 0, videoWidth, videoHeight);

      if (showVideo) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-videoWidth, 0);
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight); //*for pause
        ctx.restore();
      }

      // For each pose (i.e. person) detected in an image, loop through the poses
      // and draw the resulting skeleton and keypoints if over certain confidence
      // scores
      poses.forEach(({ score, keypoints }) => {
        if (score >= minPoseConfidence) {
          console.log("score", poses);
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
    await this.setState({ counter: 0 });
    await this.setState({ displayCamera: false });
  };

  onPauseButon = async (ctx, video) => {
    await clearInterval(this.state.timer);
    const { videoWidth, videoHeight } = this.props;
    const canvas = this.canvas;

    canvas.width = videoWidth;
    canvas.height = videoHeight;
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight); //*for pause
  };

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
              <Stats label="score" value={this.state.scorePoints} />
            </Grid.Column>

            <Grid.Column>
              {this.state.counter >= 10 ? (
                <Stats label="timer" value={`00:${this.state.counter}`} />
              ) : (
                <Stats label="timer" value={`00:0${this.state.counter}`} />
              )}
            </Grid.Column>
            <Grid.Column>
              <Stats label="poses" value={this.state.currentPose} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {this.state.displayCamera ? (
          <div>
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <div className="PoseNet">
                    {loading}
                    <video playsInline ref={this.getVideo} />
                    <canvas ref={this.getCanvas} />
                  </div>
                  <Buttons onClick={this.onPauseButton} className="pauseButton">
                    Pause
                  </Buttons>
                  <Buttons onClick={this.onStopButton} className="stopButton">
                    Stop
                  </Buttons>
                </Grid.Column>
                <Grid.Column>
                  <Image src={this.state.posture} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
