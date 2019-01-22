import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";

class MenuNav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button href="/auth/google">
            Log-in With Google <i class="google icon big" />
          </Button>
        );
      default:
        return (
          <Button href="/api/logout">
            Log-out
            <i class="sign-out icon big" />
          </Button>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <Menu>
         <Menu.Item className="left brand-logo">Posture Check</Menu.Item>
        <Menu.Item className="right">{this.renderContent()}</Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(MenuNav);
