import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import Accessibility from 'material-ui-icons/Accessible';
import AccountBox from 'material-ui-icons/AccountBox';
import AlarmOn from 'material-ui-icons/AlarmOn';
import AddShoppingCart from 'material-ui-icons/AddShoppingCart';
import AttachMoney from 'material-ui-icons/AttachMoney';
import TrendingUp from 'material-ui-icons/TrendingUp';
import IconButton  from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { home } from '../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: '#EF5350'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: 'theme.palette.text.secondary',
    backgroundColor: 'transparent',
    boxShadow:'none',
    display: 'flex',
    justifyContent: 'center',
    border:'1px solid #E53935'
  },
  paperLabel: {
    display: 'block',
    width: '100%'
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
  icon: {
    width: 40,
    height: 40,
    color: '#fff'
  },
  mainAvatar: {
    width: 120,
    height: 120,
  },
  mainIcon: {
    width: 80,
    height: 80,
    color: '#fff'
  }
});

class App extends Component {

  componentDidMount() {
      this.props.home();
  }

  render() {

    const { classes } = this.props;

    return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <IconButton className={classes.mainAvatar} component={props => <Link {...props}/>} to="/teacher">
              <AddShoppingCart className={classes.mainIcon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/teacher">
              <Accessibility className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/teacher">
              <AlarmOn className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/student">
              <AccountBox className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/student">
              <AddShoppingCart className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/student">
              <AttachMoney className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IconButton className={classes.bigAvatar} component={props => <Link {...props}/>} to="/student">
              <TrendingUp className={classes.icon} />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { title: 'Teacher Lists' };
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, { home })(App));
