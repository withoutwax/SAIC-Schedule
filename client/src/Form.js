import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import axios from 'axios';

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
  handleInputChange = (input) => {
    const target = input.target;
    const name = target.name;

    this.setState({
      [name]: input.target.value
    }, () => {
      console.log(this.state);
    });
  }

  onSubmit = (event) => {
    //event.preventDefault();
    //const { courseTitle, courseNumber, roomNumber, instructor } = this.state;

    /*
    $.ajax({
			url: '/course',
			type: 'GET',
			dataType: 'json',

			success: function(response) {
        alert("Success");
        console.log(response);
			},
			error: function(jqXhr, textStatus, errorMessage) {
				// error Callback
			}
		});
    */

    fetch('http://localhost:3001/course', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          courseTitle: this.state.courseTitle,
          courseNumber: this.state.courseNumber,
          roomNumber: this.state.roomNumber,
          instructor: this.state.instructor
        })
      })
      .then((response) => {
        alert("Success");
        console.log(response);
      })
      .catch((error) => {
        alert("Fail");
        console.log(error);
      });

  //   axios.post('/course', {
  //     courseTitle: this.state.courseTitle,
  //     courseNumber: this.state.courseNumber,
  //     roomNumber: this.state.roomNumber,
  //     instructor: this.state.instructor
  //   })
  //   .then(function(response) {
  //     alert("Success");
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     alert("Fail");
  //     console.log(error);
  //   });
  // }
  // componentDidUpdate() {
  //   console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>SAIC</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
    				<label for="inputCourseTitle">Course Title:</label>
    				<input name="courseTitle" value={this.state.courseTitle} onChange={this.handleInputChange} className="form-control" placeholder="Course Title" id="courseTitleInput"></input>
    				<small id="courseTitleHelp" className="form-text text-muted">(Example: VISCOM: Introduction to Typography)</small>
    			</div>
    			<div className="form-group">
    				<label for="inputCourseNumber">Course Number:</label>
    				<input name="courseNumber" value={this.state.courseNumber} onChange={this.handleInputChange} type="courseNumber" className="form-control" placeholder="E.G: 2011-002" id="courseNumberInput"></input>
    			</div>
    			<div className="form-group">
    				<label for="inputRoomNumber">Room Number:</label>
    				<input name="roomNumber" value={this.state.roomNumber} onChange={this.handleInputChange} type="roomNumber" className="form-control" placeholder="Room Number" id="roomInput"></input>
    				<small id="roomNumberHelp" className="form-text text-muted">(Example: Sharp 1114)</small>
    			</div>
    			<div className="form-group">
    				<label for="inputInstructor">Instructor:</label>
    				<input name="instructor" value={this.state.instructor} onChange={this.handleInputChange} type="instructorTitle" className="form-control" placeholder="Instructor Name" id="instructorInput"></input>
    				<small id="instructorHelp" className="form-text text-muted">(Example: John Appleseed)</small>
    			</div>
          <button className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
