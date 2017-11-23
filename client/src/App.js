import React from 'react';
import './App.css';
import Form from './Form/Form';
import Course from './Form/Course';
import Tab from './Tab';
import Profile from './Profile';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Profile />
            </div>
            <div className="col-sm-6">
              <Tab />
              <Switch>
                <Route exact path="/" component={Form}/>
                <Route path="/course" component={Course}/>
              </Switch>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
