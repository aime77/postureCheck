import React from "react";
import "./style.css";
import posture1 from "../images/Picture1.png";
import { Grid, Image } from "semantic-ui-react";
import { Wave } from 'react-animated-text';

const Home = () => {
  return (
    
      <Grid >
        <Grid.Row style={{ marginTop: "10%" }}>
          <Grid.Column width={3}>
            <Image src={posture1} />
          </Grid.Column>
          <Grid.Column width={13}>
            <div style={{ textAlign: "center" }}>
              <h1>Time to...</h1>
              <Wave text="Check your POSTURE"/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
   
  );
};

export default Home;
