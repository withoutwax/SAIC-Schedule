import React from 'react';
import './CourseData.css';

class CourseData extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="card col-sm-2">
        <h3>{this.props.courseTitle}</h3>
        <p>{this.props.courseNumber}</p>
        <p>{this.props.roomNumber}</p>
        <p>{this.props.instructor}</p>
      </div>
    );
  }
}

export default CourseData;
