import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGurus } from '../actions';

class GurusIndex extends Component {

  componentDidMount() {
      this.props.fetchGurus();
  }

  renderGurus() {
    return _.map(this.props.gurus.items, guru => {
      return (
        <li className="list-group-item" key={guru.id}>
          <div className="row">
            <div className="col-md-2">
              <div className="thumbnail">
                <img src={ guru.image_url } className="img-thumbnail" />
              </div>
            </div>
            <div className="col-md-10">
              <h3>{ guru.nama_depan } { guru.nama_belakang }</h3>
              <p>
                { guru.alamat }
              </p>
            </div>
          </div>
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
        <h1>List Guru</h1>
        <div className="text-md-right">
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
