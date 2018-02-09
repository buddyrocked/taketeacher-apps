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
          <TextField
            id="longitude"
            name="Murid[longitude]"
            label="Longitude"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="latitude"
            name="Murid[latitude]"
            label="Latitude"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="email"
            name="Murid[email]"
            label="Email"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="image"
            name="Murid[image]"
            label="Image"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="status"
            name="User[status]"
            label="Status"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="username"
            name="User[username]"
            label="Username"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="password"
            name="User[password]"
            label="Password"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="repeat_passowrd"
            name="User[repeat_passowrd]"
            label="Repeat Passowrd"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="bind_to_ip"
            name="User[bind_to_ip]"
            label="bind_to_ip"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="email"
            name="User[email]"
            label="email"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="email_confirmed"
            name="User[email_confirmed]"
            label="email_confirmed"
            className={classes.textField}
            margin="normal"
            value="1"
          />
          <TextField
            id="role"
            name="role"
            label="Role"
            className={classes.textField}
            value="1"
            margin="normal"
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
