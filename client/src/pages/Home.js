import React from "react";
import "./style.css";
import posture1 from "../images/Picture1.png";
import { Grid, Image } from "semantic-ui-react";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Posture Check!</h1>
      </div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <Image src={posture1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
