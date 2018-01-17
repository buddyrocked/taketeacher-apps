import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME...!</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-group-item">
            <Link to="/teacher">Teacher</Link>
          </li>
          <li className="list-group-item">
            <Link to="/student">Student</Link>
          </li>
        </ul>
      </div>
    );
  }
}
