import React from 'react';
import CourseData from './CourseData';

class Course extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: []
    }
    // this.handleUpdate = this.handleUpdate.bind(this);
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
  // handleUpdate(data) {
  //   console.log(data);
  // }
  render() {
    var notes = this.state.courses;
    notes = notes.map((data) => {
      return (
        <CourseData key={data._id} courseTitle={data.courseTitle} courseNumber={data.courseNumber} roomNumber={data.roomNumber} instructor={data.instructor} id={data._id}/>
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
