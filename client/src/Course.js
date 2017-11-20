import React from 'react';
import CourseData from './CourseData';
import 'bootstrap/dist/css/bootstrap.css';

class Course extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/course')
      .then(result => {
        return result.json();
      }).then(data => {
        this.setState({
          courses: data
        })
        // var sample = this.state.courses[0].courseTitle; //VISCOM
        // console.log(data);
      });
  }
  render() {
    var notes = this.state.courses;
    notes = notes.map((data) => {
      console.log(data);
      console.log(data.courseTitle);
      return (
        <CourseData courseTitle={data.courseTitle} courseNumber={data.courseNumber} roomNumber={data.roomNumber} instructor={data.instructor}/>
      );
    });


    return (
      <div className="container">
        <div className="row">
          {notes}
        </div>
      </div>
    );
  }
}

export default Course;
