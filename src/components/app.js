import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME...!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
        </ul>
      </div>
    );
  }
}
