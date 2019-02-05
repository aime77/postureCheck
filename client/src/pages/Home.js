import React, { Component } from "react";
import "./style.css";
import posture1 from "../images/Picture1.png";
import { Grid, Image, Container } from "semantic-ui-react";
import TextyAnim from "rc-texty/lib";
import "rc-texty/assets/index.css";

const text = "Time to... ✓ your posture";

export default class Home extends Component {
  getEnter = e => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0
        };
      case 3:
        return {
          y: 60,
          opacity: 0
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: "set"
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 }
          ],
          leave: {
            opacity: 0,
            scale: 0
          }
        };
      case 11:
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0
        };
      case 12:
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0
        };
      default:
        return {
          opacity: 0
        };
    }
  };
  render() {
    return (
      <Container style={{ marginTop: "10%" }}>
        <Grid.Column width={16}>
          <TextyAnim
            style={{ fontSize: "5rem", textAlign:"center" }}
            enter={this.getEnter}
            leave={this.getEnter}
          >
            {text}
          </TextyAnim>
        </Grid.Column>
        <Grid.Column width={16} style={{ marginTop: "5%" }}>
          <Image src={posture1} />
        </Grid.Column>
      </Container>
    );
  }
}
