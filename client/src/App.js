import React from 'react';
import './App.css';
import Form from './Form';
import Course from './Course';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form/>
        <Course/>
      </div>

    );
  }
}

export default App;
