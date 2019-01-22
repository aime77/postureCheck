import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";

class MenuPage extends Component {
  render() {
    console.lof(this.props)
    return (
      <Menu>
        <Menu.Item>
          <Button>Log-in With Google</Button>
        </Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps)(MenuPage);
