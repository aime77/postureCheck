import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
            <i className="sign-out icon big">Log-out</i>
          </Button>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <Menu>
        <Link to={this.props.auth ? "/dashboard" : "/"}>
          <Menu.Item className="left brand-logo">Posture Check</Menu.Item>
        </Link>
        <Menu.Item className="right">{this.renderContent()}</Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(MenuNav);
