//shows new form and review
//parent to FormNew and Review
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import FormNew from "./FormNew";
import Review from "./Review";
import "./styleForms.css"

class FormButton extends Component {
  state = { reviewCheck: false };

  renderContent() {
    if (this.state.reviewCheck) {
      return <Review onCancel={() => this.setState({ reviewCheck: false })} />;
    }
    return (
      <FormNew onFormSubmit={() => this.setState({ reviewCheck: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "formnew"
})(FormButton);
