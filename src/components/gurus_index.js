import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGurus } from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

const styles = {
  bigAvatar: {
    width: 80,
    height: 80,
  },
  label: {
    fontWeight: 'bold',
    fontSize: '16px'
  }
};

class GurusIndex extends Component {

  componentDidMount() {
      this.props.fetchGurus();
  }

  renderGurus() {
    const { classes } = this.props;

    return _.map(this.props.gurus.items, guru => {
      return (
        <ListItem dense button key={guru.id} component={props => <Link {...props}/>} to="/">
            <Avatar alt="Remy Sharp" src={ guru.image_url } className={classes.bigAvatar} />
            <ListItemText primary={ `${guru.nama_depan}  ${guru.nama_belakang}` } className={classes.label} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments" component={props => <Link {...props}/>} to="/">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      );
    });
  }

  renderPagination(){
    const { _links } = this.props.gurus;

    if(!_links) {
      return <div>Loading</div>;
    }

    const _self = _links.self.href;

    return (


      <Link to={_self}>
        Next
      </Link>
    );
  }

  render() {
    return (
      <div>
        <List>
          { this.renderGurus() }
        </List>
        { this.renderPagination() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gurus: state.gurus };
}

GurusIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, { fetchGurus })(GurusIndex));
