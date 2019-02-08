import { connect } from "react-redux";
import React, { Component } from "react";
import {
  Card,
  Image,
  List,
  Button,
  Modal,
  Grid,
  Segment,
  Container
} from "semantic-ui-react";

import FormNew from "../components/FormNew";

class ProfilePage extends Component {
  renderModal() {
    return (
      <Modal
        className="modalSyle"
        trigger={
          <Button className="ui button secondary">Update Profile Info</Button>
        }
      >
        <Modal.Header>Profile Info</Modal.Header>

        <FormNew />
      </Modal>
    );
  }

  render() {
    return (
      <Container>
        {this.renderModal()}
        {this.props.user !== null ? (
          <Grid.Column width={16}>
            <Segment>
              <Card centered>
                <Card.Content>
                  <Image
                    floated="right"
                    size="large"
                    src={this.props.user.profilePicture}
                  />

                  <Card.Description>
                    <List>
                      <List.Item
                        className="fontCard"
                        content={this.props.user.name}
                      />
                      <List.Item
                        className="fontCard"
                        icon="options big"
                        header="Athletic Type:"
                        content={this.props.user.athleticType}
                      />
                      <List.Item
                        className="fontCard"
                        icon="male big"
                        header="Gender:"
                        content={this.props.user.age}
                      />
                      <List.Item
                        className="fontCard"
                        icon="marker big"
                        header="Zip Code:"
                        content={this.props.user.zipcode}
                      />
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        ) : (
          ""
        )}
      </Container>
    );
  }
}
const mapStateProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateProps)(ProfilePage);
