import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGurus } from '../actions';
import Grid from 'material-ui/Grid';

class GurusIndex extends Component {

  componentDidMount() {
      this.props.fetchGurus();
  }

  renderGurus() {
    return _.map(this.props.gurus.items, guru => {
      return (
        <li className="list-group-item" key={guru.id}>
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <img src={ guru.image_url } className="img-thumbnail" />
            </Grid>
            <Grid item xs={8} sm={8}>
              <h3>{ guru.nama_depan } { guru.nama_belakang }</h3>
              <p>
                { guru.alamat }
              </p>
            </Grid>
          </Grid>
        </li>
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
        <h1>Teachers List</h1>
        <div className="text-md-right">
          <Link to="/" className="btn btn-success">
            Back To Home
          </Link>
          <Link to="/teacher/new" className="btn btn-primary">
            Register
          </Link>
        </div>
        <ul className="list-group">
          { this.renderGurus() }
        </ul>
        { this.renderPagination() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gurus: state.gurus };
}

export default connect(mapStateToProps, { fetchGurus })(GurusIndex);
