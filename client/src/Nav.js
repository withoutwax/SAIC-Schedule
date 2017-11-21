import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Nav extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active">Enter Your Course</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course">
                <a className="nav-link">Course Enrolled</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
