import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class CompanyForm extends Component {
  static validate = (values) => {
    const errors = {};
    const requiredFields = ['name'];

    requiredFields.forEach((item) => {
      if (!values[item]) {
        errors[item] = 'Required';
      }
    });

    return errors;
  }

  renderTextField = props => (
    <TextField hintText={props.label} floatingLabelText={props.label} errorText={props.touched && props.error} {...props} fullWidth />
  );

  render() {
    const { handleSubmit, submitting } = this.props;
    const buttonText = (submitting) ? 'Saving...' : 'Save';

    return (
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <div className="unit whole">
            <Field name="name" label="Company Name" component={this.renderTextField} />
          </div>
        </div>
        <div className="grid">
          <div className="unit two-thirds" />
          <div className="unit one-third">
            <RaisedButton fullWidth onClick={handleSubmit} disabled={submitting}>{buttonText}</RaisedButton>
          </div>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'companyForm',
  validate: CompanyForm.validate
})(CompanyForm);