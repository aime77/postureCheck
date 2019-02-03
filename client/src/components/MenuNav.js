import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ButtonAnimated from "ButtonAnimated";

class MenuNav extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ButtonAnimated
            href="/auth/google"
            buttonVisible="Log-in With Google"
            buttonHiddenIconName="google"
          />
        );
      default:
        return (
          <ButtonAnimated
            href="/api/logout"
            buttonVisible="Logout"
            buttonHiddenIconName="arrow alternate circle right"
          />
        );
    }
  }
  render() {
    return (
      <Menu>
        <Link to={this.props.auth ? "/dashboard" : "/"}>
          <Menu.Item className="left brand-logo mainFont">
            Posture Check
          </Menu.Item>
        </Link>
        <Menu.Item className="right">{this.renderContent()}</Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(MenuNav);
