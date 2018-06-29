import React, { Component } from 'react';

import {
    Link,
    Redirect
} from 'react-router-dom';

import Dashboard from './Dashboard';

class Login extends Component {
    state={
        LoggedIn: false,
        move: false,
        // userId:""
    }

    handleSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        const self = this;
        fetch('/user/processlogin',{
            method : "POST",
            headers : new Headers(),
            body: JSON.stringify ({
                username: username,
                password : password
            }),
            // headers: {"Content-Type": "application/json"}
        })
        .then((res)=>(res.json()))
        .then (function(data){
            if(data.success==true){
                //x=data.user;
                // self.setState({userId:data.user});
                localStorage.setItem('user',data.user);
                localStorage.setItem('name',data.Uname);
                localStorage.setItem('email',data.Email);
                // <Redirect to ='Dashboard' component={Dashboard} />
                console.log(data);
                self.setState({move:!self.state.move})
            }
            else{
                // <Redirect to ='Login' />
                console.log(data);
            }
        });
        
    }
  render() {
      if(this.state.move === true){
          return (<Redirect to="Dashboard" component={Dashboard} />);
      }
    return (
      <div>

        <span className="back">Do you want to go back to the homepage? <Link to="/"> back</Link></span>
        <center>
        <div className="container">
            <h1>Login  </h1>
            <form onSubmit ={this.handleSubmit.bind(this)}>
                <label>Username: </label>
                <input className="textbox" type="text" ref="username"/><br />

                <label>Password: </label>
                <input className="textbox" type="password" ref="password"/><br />

                {/* <p style="color:red"><%= req.session.loginError %></p> */}
                
                <input type="submit" name="submit" value="Login"/><br />


                <p>Don't have an account?<Link to="/Register">Create one</Link></p>
            </form>
        </div>
        </center>
        {/* <Dashboard userId = {this.state.userId}/> */}

      </div>
    );
  }
}

export default Login;










