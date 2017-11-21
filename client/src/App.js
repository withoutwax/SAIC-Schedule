import React from 'react';
import './App.css';
import Form from './Form';
import Course from './Course';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Form}/>
          <Route path="/course" component={Course}/>
        </Switch>
      </div>

      // <div>
      //   <Nav />
      //   <Form/>
      //   <Course/>
      // </div>

    );
  }
}

export default App;
