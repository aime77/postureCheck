import React from "react";
import _ from "lodash";
import { Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import fieldsArray from "./fieldsArray";
import * as actions from "../../actions";
import {withRouter} from "react-router-dom";

const Review = ({ onCancel, formValues, submitForm, history }) => {
  const fieldList = _.map(fieldsArray, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <Container>
      <h5>Please confirm your entries</h5>
      {fieldList}
      <Button onClick={onCancel}>Back</Button>
      <Button onClick={() => submitForm(formValues, history)}>Send Information</Button>
    </Container>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.formnew.values };
}

export default connect(mapStateToProps)(withRouter(Review));
