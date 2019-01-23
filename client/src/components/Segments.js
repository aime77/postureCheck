import React from "react";
import {
  Grid,
  Segment,
  Image
} from "semantic-ui-react";

const src="./Picture1.png";
const Segments = ({children}) => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Grid.Row verticalAlign="middle">
      <Grid.Column>
      <Image src={src} size='huge' >
        </Image>
        </Grid.Column >
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Segments;
