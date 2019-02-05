import { connect } from "react-redux";
import React, { Component } from "react";
import { Card, Image, List, Button, Modal } from "semantic-ui-react";
import { profileRender } from "../actions";
import FormNew from "../components/FormNew";

class ProfilePage extends Component {
  renderModal() {
    return (
      <Modal
        className="modalSyle"
        trigger={<Button>Contribute to Research</Button>}
      >
        <Modal.Header>Profile Info</Modal.Header>
        {/* <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content> */}

        <FormNew />
      </Modal>
    );
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Image floated="right" size="large" src={this.props.profileImage} />
          <Card.Header>{this.props.profileName}</Card.Header>
          <Card.Description>
            <List>
              <List.Item content="Profile Info" />
              <List.Item icon="options" content={this.props.athleticType} />
              <List.Item icon="male" content={this.props.profileName} />
              <List.Item icon="marker" content={this.props.zipcode} />
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
const mapStateProps = state => {
  return {
    videos: state.videoArray,
    score: state.score,
    videoSelected: state.videoSelected.selection,
    timer: state.timer,
    activateTimer: state.timer.running,
    active: state.active
  };
};

export default connect(
  mapStateProps,
  { profileRender }
)(ProfilePage);
