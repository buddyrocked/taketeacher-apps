import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createTeacher } from '../actions';


class TeachersNew extends Component {
  renderField(field){

    const { meta : { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return(
      <div className={className}>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    )
  }

  onSubmit(values){
    const teacher = { Gurus : values }

    this.props.createTeacher(teacher, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <Link className="btn btn-primary" to="/teacher">
          Back To List
        </Link>
        <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Nama Depan"
            name="nama_depan"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {

  const errors = {};

  if(!values.nama_depan){
    errors.nama_depan = 'Enter Nama Depan';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'TeachersNewForm'
})(
  connect(null, { createTeacher })(TeachersNew)
);
