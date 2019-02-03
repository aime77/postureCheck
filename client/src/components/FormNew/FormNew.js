//shows form
import React, { Component } from "react";
import _ from "lodash";
import { Button, Form, Container } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import FieldForm from "./Field";
import { Link } from "react-router-dom";
import fieldsArray from "./fieldsArray";

class FormNew extends Component {
  renderFields() {
    return _.map(fieldsArray, ({ label, name }) => {
      return (
        <Form.Group>
          <Field
            style={{ color: "black" }}
            key={name}
            component={FieldForm}
            type="text"
            label={label}
            name={name}
          />
        </Form.Group>
      );
    });
  }
  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
            {this.renderFields()}
            <Link to="/dashboard">
              <Button>Cancel</Button>
            </Link>
            <Button type="submit">Next</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(fieldsArray, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please provide a value.";
    }
  });
  return errors;
}

export default reduxForm({
  validate: validate,
  form: "formnew",
  destroyOnUnmount: false
})(FormNew);
