import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions";

class ScoringList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderList() {
    return this.props.userData.map(post => {
      return <div className="item" key={post.id} />;
    });
  }

  render() {
    return <div>List</div>;
  }
}

const mapStateToProps = state => {
  return { userData: state.userData };
};
export default connect(
  null,
  { fetchData }
)(ScoringList);
