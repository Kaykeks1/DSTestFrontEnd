import React, { Component } from 'react';
import {
    Link,
    Redirect
  } from 'react-router-dom';

import Dashboard from './Dashboard';

class Register extends Component {
  state={
    LoggedIn: false,
    move: false
  }
  handleSubmit(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let email = this.refs.email.value;
    let phone = this.refs.phone.value;
    const self = this;
    fetch('/user/processregister',{
        method : "POST",
        headers : new Headers(),
        body: JSON.stringify ({
            name: name,
            username: username,
            password : password,
            phone: phone,
            email: email
            
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then((res)=>(res.json()))
    .then (function(data){
        if(data.success==true){
          localStorage.setItem('user',data.user);
          localStorage.setItem('name',data.Uname);
          localStorage.setItem('email',data.Email);
          // localStorage.setItem('name',data.Uname);
          // <Redirect to ='Dashboard' />
          console.log(data);
          self.setState({move:!self.state.move})
        }
    }) 
  }
  render() {

    if(this.state.move === true){
      return (<Redirect to="Dashboard" component={Dashboard} />);
   }

    return (
      <div>

        <span className="back">Do you want to go back to the homepage?<Link to="/"> back</Link></span>
        <div className="container">
            <center>
            <h1>Register</h1>
            
            <form onSubmit ={this.handleSubmit.bind(this)}>
                <label>Name: </label>
                <input className="textbox" type="text" ref="name"/><br />

                <label>Username: </label>
                <input className="textbox" type="text" ref="username"/><br />

                <label>Password: </label>
                <input className="textbox" type="password" ref="password"/><br />
                
                <label>Phone: </label>
                <input className="textbox" type="text" ref="phone"/><br />

                <label>Email: </label>
                <input className="textbox" type="text" ref="email"/><br />

                <input type="submit" name="submit" value="Signup"/><br />

            <p>Already have an account? <Link to="/Login">login</Link></p>

            </form>
            </center>
        </div>

      </div>
    );
  }
}

export default Register;
