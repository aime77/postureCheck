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
import { userDataFunction } from "../actions";
import FormNew from "../components/FormNew";

class ProfilePage extends Component {
  renderModal() {
    return (
      <Modal
        className="modalSyle"
        trigger={<Button>Update Profile Info</Button>}
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
        <Grid.Column width={16}>
          <Segment>
            <Card centered>
              <Card.Content>
                <Image
                  floated="right"
                  size="large"
                  src={this.props.userData.profilePicture}
                />
                <Card.Header>{this.props.userData.name}</Card.Header>
                <Card.Description>
                  <List>
                    
                    <List.Item
                      icon="options big"
                      header="Athletic Type:"
                      content={this.props.userData.athleticType}
                    />
                    <List.Item icon="male big" header="Age:" content={this.props.userData.age} />
                    <List.Item
                      icon="marker big"
                      header="Zip Code:"
                      content={this.props.userData.zipcode}
                    />
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
      </Container>
    );
  }
}
const mapStateProps = state => {
  console.log(state.userData)
  return {
    userData: state.userData
  };
};

export default connect(
  mapStateProps,
  { userDataFunction }
)(ProfilePage);
