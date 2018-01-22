import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';


import MainMenu from './main_menu';
import App from '../components/app';
import GurusIndex from '../components/gurus_index';
import GurusNew from '../components/teachers_new';
import StudentsIndex from '../components/students_index';
import StudentsNew from '../components/students_new';

const drawerWidth = 360;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
    fontType: theme.typography.button
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'fixed',
    top:'0px',
    backgroundColor:'#E53935',
    boxShadow:'none',
  },
  appBarShift: {
    width: '100%',
  },
  'appBarShift-left': {
    marginLeft: 0,
  },
  'appBarShift-right': {
    marginRight: 0,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'absolute',
    height: '100%',
    width: drawerWidth,
  },
  drawContainer: {
    backgroundColor: '#EF5350'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#EF5350',
    color: 'white'
  },
  chevron: {
    color: 'white'
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 0,
    height: '100%',
    marginTop: 32,
  },
  'content-left': {
    marginLeft: 0,
  },
  'content-right': {
    marginRight: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  loginName: {
    textAlign: 'center',
    backgroundColor: '#EF5350',
    color: 'white',
    padding: '10px 0'
  }
});

class MenuAppBar extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawContainer}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose} className={classes.chevron}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <div className={classes.row}>
              <div>
                <Avatar
                  alt="Adelle Charles"
                  src="/static/images/uxceo-128.jpg"
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
              </div>
            </div>
            <div>
              <Typography className={classes.loginName}>Budi Hariyana</Typography>
            </div>
          </div>
          <List className={classes.list}>{mailFolderListItems}</List>
          <Divider />
          <List className={classes.list}>{otherMailFolderListItems}</List>
        </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Taketeacher
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className="content">
              <Switch>
                <Route path="/student/new" component={StudentsNew} />
                <Route path="/student" component={StudentsIndex} />
                <Route path="/teacher/new" component={GurusNew} />
                <Route path="/teacher" component={GurusIndex} />
                <Route path="/" component={App} />
              </Switch>
            </div>
          </main>
          {after}
        </div>
      </div>
    );
  }
}
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAppBar);
