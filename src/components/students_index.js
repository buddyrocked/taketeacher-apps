import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../actions';

class StudentsIndex extends Component {

  componentDidMount() {
      this.props.fetchStudents();
  }

  renderStudents() {
    return _.map(this.props.students.items, student => {
      return (
        <li className="list-group-item" key={student.id}>
          <div className="row">
            <div className="col-md-2 col-xs-4">
              <div className="thumbnail">
                <img src={ student.image_url } className="img-thumbnail" />
              </div>
            </div>
            <div className="col-md-10 col-xs-6">
              <h3>{ student.nama_depan } { student.nama_belakang }</h3>
              <p>
                { student.alamat }
              </p>
            </div>
          </div>
        </li>
      );
    });
  }

  renderPagination(){
    const { _links } = this.props.students;

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
        <h1></h1>
        <div className="text-md-right">
          <Link to="/" className="btn btn-success">
            Back To Home
          </Link>
          <Link to="/student/new" className="btn btn-primary">
            Register
          </Link>
        </div>
        <ul className="list-group">
          { this.renderStudents() }
        </ul>
        { this.renderPagination() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { students: state.students };
}

export default connect(mapStateToProps, { fetchStudents })(StudentsIndex);
