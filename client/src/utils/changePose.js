import posture1 from "../images/p1-oh.jpg";
import posture2 from "../images/p2-ra.jpg";
import posture3 from "../images/p1-oh.jpg";
import posture4 from "../images/p2-ra.jpg";
import * as calculations from "./calculations";

export const changePose = async pose => {
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

  