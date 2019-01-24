import React from "react";
import {
  Grid,
  Segment,
 
} from "semantic-ui-react";

const Segments = ({children}) => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign="center">
      <Grid.Row verticalAlign="middle">
      <Grid.Column>
      {children}
        </Grid.Column >
        <Grid.Column>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Segments;
