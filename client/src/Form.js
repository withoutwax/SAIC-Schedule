import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      courseTitle: '',
      courseNumber: '',
      roomNumber: '',
      instructor: ''
    }
  }
  courseTitleInput = (input) => {
    this.setState({
      courseTitle: input.target.value
    });
  }
  courseNumberInput = (input) => {
    this.setState({
      courseNumber: input.target.value
    });
  }
  roomNumberInput = (input) => {
    this.setState({
      roomNumber: input.target.value
    });
  }
  instructorInput = (input) => {
    this.setState({
      instructor: input.target.value
    });
  }
  // componentDidUpdate() {
  //   console.log(this.state);
  // }
  render() {
    return (
      <div>
        <h1>SAIC</h1>
        <form>
          <div className="form-group">
    				<label for="inputCourseTitle">Course Title:</label>
    				<input value={this.state.courseTitle} onChange={this.courseTitleInput} className="form-control" placeholder="Course Title" id="courseTitleInput"></input>
    				<small id="courseTitleHelp" className="form-text text-muted">(Example: VISCOM: Introduction to Typography)</small>
    			</div>
    			<div className="form-group">
    				<label for="inputCourseNumber">Course Number:</label>
    				<input value={this.state.courseNumber} onChange={this.courseNumberInput} type="courseNumber" className="form-control" placeholder="E.G: 2011-002" id="courseNumberInput"></input>
    			</div>
    			<div className="form-group">
    				<label for="inputRoomNumber">Room Number:</label>
    				<input value={this.state.roomNumber} onChange={this.roomNumberInput} type="roomNumber" className="form-control" placeholder="Room Number" id="roomInput"></input>
    				<small id="roomNumberHelp" className="form-text text-muted">(Example: Sharp 1114)</small>
    			</div>
    			<div className="form-group">
    				<label for="inputInstructor">Instructor:</label>
    				<input value={this.state.instructor} onChange={this.instructorInput} type="instructorTitle" className="form-control" placeholder="Instructor Name" id="instructorInput"></input>
    				<small id="instructorHelp" className="form-text text-muted">(Example: John Appleseed)</small>
    			</div>
        </form>
      </div>
    );
  }
}

export default Form;
