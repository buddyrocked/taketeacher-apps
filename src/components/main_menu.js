import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('data-something'));
}

function MainMenu(props) {
  const { classes } = props;
  return (
    <div>
      <Button color="primary" to="/" className={classes.button} component={props => <Link {...props}/>}>
        Home
      </Button>
      <Button color="primary" to="/teacher" className={classes.button} component={props => <Link {...props}/>}>
        Teachers
      </Button>
      <Button color="primary" to="/student" className={classes.button} component={props => <Link {...props}/>}>
        Students
      </Button>
    </div>
  );
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenu);
