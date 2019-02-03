import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class SideMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu compact icon="labeled" vertical>
        <Link to="/form">
          <Menu.Item
            name="user"
            active={activeItem === "user"}
          >
            <Icon name="user" />
            Profile Info
          </Menu.Item>
        </Link>
        <Link to="/stats">
          <Menu.Item
            name="pie graph"
            active={activeItem === "pie graph"}
          >
            <Icon name="pie graph" />
            Statistics
          </Menu.Item>
        </Link>

        <Link to="/messenger">
          <Menu.Item
            name="comments"
            active={activeItem === "comments"}
          >
            <Icon name="comments" />
            Messenger
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
