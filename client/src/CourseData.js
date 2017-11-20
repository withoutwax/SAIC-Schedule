import React from 'react';
import './CourseData.css';

class CourseData extends React.Component {
  constructor() {
    super();
    this.state = {
    }

    this.deleteCourse = this.deleteCourse.bind(this);
  }
  deleteCourse() {
    const id = this.props.id;
    fetch('http://localhost:3001/course/' + id, {
      method: 'delete'
      })
      .then((response) => {
        alert("Delete Success");
        console.log(response);
      })
      .catch((error) => {
        alert("Delete Fail");
        console.log(error);
      });
      window.location.reload();
  }
  render() {
    return (
      <div className="card col-sm-2">
        <h3>{this.props.courseTitle}</h3>
        <p>{this.props.courseNumber}</p>
        <p>{this.props.roomNumber}</p>
        <p>{this.props.instructor}</p>
        <button className="btn btn-danger" onClick={this.deleteCourse}>DELETE</button>
      </div>
    );
  }
}

export default CourseData;
