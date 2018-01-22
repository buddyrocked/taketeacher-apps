import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStudent } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class StudentsNew extends Component {
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
    this.props.createStudent(values, () => {
      //this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <Link className="btn btn-primary" to="/Student">
          Back To List
        </Link>
        <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <TextField
            id="name"
            name="Murid[nama_depan]"
            label="Nama Depan"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="nama_belakang"
            name="Murid[nama_belakang]"
            label="Nama Belakang"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="telpon"
            name="Murid[telpon]"
            label="Telepon"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="alamat"
            name="Murid[alamat]"
            label="Alamat"
            className={classes.textField}
            margin="normal"
          />
          <Field
            label="Longitude"
            name="Murid[longitude]"
            component={this.renderField}
          />
          <Field
            label="Latitude"
            name="Murid[latitude]"
            component={this.renderField}
          />
          <Field
            label="email"
            name="Murid[email]"
            component={this.renderField}
          />
          <Field
            label="image"
            name="Murid[image]"
            component={this.renderField}
          />
          <Field
            label="status"
            name="User[status]"
            component={this.renderField}
          />
          <Field
            label="username"
            name="User[username]"
            component={this.renderField}
          />
          <Field
            label="password"
            name="User[password]"
            component={this.renderField}
          />
          <Field
            label="repeat password"
            name="User[repeat_password]"
            component={this.renderField}
          />
          <Field
            label="bind_to_ip"
            name="User[bind_to_ip]"
            component={this.renderField}
          />
          <Field
            label="email"
            name="User[email]"
            component={this.renderField}
          />
          <Field
            label="email_confirmed"
            name="User[email_confirmed]"
            component={this.renderField}
          />
          <Field
            label="role"
            name="role"
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

StudentsNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

StudentsNew =  reduxForm({
  validate,
  form: 'StudentsNewForm'
})(StudentsNew);

export default withStyles(styles)(connect(null, { createStudent })(StudentsNew))
