import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
        <div className="container">
            <span className="back"><Link to="Register" className="signIn">SIGN-UP</Link> | <Link to="Login" className="signIn">LOGIN</Link></span>
            <h2> Welcome to my App</h2>

            <p>This app helps you to add your hobbies. But first you have to sign up. If you already have am account you can just login</p>

    
        </div>
    );
  }
}

export default Homepage;
