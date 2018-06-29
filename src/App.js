import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


import Header from './Component/HeaderComponent/Header';
import Login from './Component/BodyComponent/Login';
import Register from './Component/BodyComponent/Register';
import Dashboard from './Component/BodyComponent/Dashboard';
import Homepage from './Component/BodyComponent/Homepage';
import View from './Component/BodyComponent/View';

import './Assets/Styles.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/View" component={View} />
        

      </div>
      </Router>
    );
  }
}

export default App;
