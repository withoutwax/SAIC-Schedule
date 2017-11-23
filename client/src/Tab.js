import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Tab extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">
            <a className="nav-link">Enter Your Course</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/course">
            <a className="nav-link">Course Enrolled</a>
          </Link>
        </li>
      </ul>
    );
  }
}

export default Tab;
