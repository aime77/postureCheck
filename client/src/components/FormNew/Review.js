import React from "react";
import _ from "lodash";
import { Button, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import fieldsArray from "./fieldsArray";
import { submitForm } from "../../actions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Review = ({ onCancel, formValues, submitForm, history }) => {
  const fieldList = _.map(fieldsArray, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{ marginTop: "3%" }}>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <Container>
      <h5>Please confirm your entries</h5>
      {fieldList}
      <Button style={{ marginTop: "3%" }} onClick={onCancel}>
        Back
      </Button>
      <Link to="/dashboard">
        <Button
          style={{ marginTop: "3%" }}
          onClick={() => submitForm(formValues, history)}
        >
          Send Information
        </Button>
      </Link>
    </Container>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.formnew.values };
}

export default connect(
  mapStateToProps,
  { submitForm }
)(withRouter(Review));
