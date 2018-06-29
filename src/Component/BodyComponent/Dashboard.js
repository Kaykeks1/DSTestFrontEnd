import React, { Component } from 'react';

import {
    Link,
    Redirect
} from 'react-router-dom';

import View from './View';

class Dashboard extends Component {
   
    state= {
        LoggedIn: false,
        move: false,
        // hobby:[],
        
        name:localStorage.getItem('name')
        // localStorage.setItem('hobbies',data.hobbies)
    
    }
    handleSubmit(e){
        e.preventDefault();
        let UserId =localStorage.getItem('user');//this.props.userId;
        let HobbyName = this.refs.HobbyName.value;
        let email =localStorage.getItem('email');
        const self = this;
        fetch('/hobbies/add',{
            method : "POST",
            headers : new Headers(),
            body: JSON.stringify ({
                UserId: UserId,
                HobbyName: HobbyName,
                email:email
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then((res)=>(res.json()))
        .then (function(data){
            if(data.success==true){
                // console.log('gggggggg');
                // localStorage.setItem('hobbies',data.hobbies);
                // self.setState({hobby:localStorage.getItem('hobbies')})
                // <Redirect to='Dashboard' />
                
                // Location.reload();
                self.setState({move:!self.state.move})
            }
        }) 
    }


    logout(){
        //localStorage.setItem('user','');
        localStorage.setItem('name','');
    }
        
    
    
    render() { 
        // this.logout();
        
        // console.log(this.state.hobby);
        //var hobby=this.state.hobby;
        

        if(this.state.move === true){
            
             return (<Redirect to="View" component={View} />);
        }
            return (
            <div >

                <span className="back">Do you want to logout? <button onclick={this.logout()}><Link to="/" > logout</Link></button></span>
                {/* <!-- <center> --> */}
                <h2>This is the dashboard</h2>
                <div className="container">
                    

                    <p>Hello, {this.state.name}</p>

                    <p>What are your hobbies?</p>

                    <form onSubmit ={this.handleSubmit.bind(this)}>
                        <input className="textbox" type="text" ref="HobbyName" />
                        <br />
                        <input type="submit" name="submit" value="ADD" />
                    </form>


                    

                    <ul>
                        {this.state.hobby}
                        {/* <% _.each(users.hobbies,function(hobbie){ %>
                        <li><%= hobbie.HobbyName %></li>
                        <% }) %> */}
                    </ul>
                
                </div>
                {/* <!-- </center> --> */}

            </div>
            );
        }
        componentWillReceiveProps(){
            return Dashboard.defaultProps={
                name:localStorage.getItem('name')        
            }
        }
    }

// ReactDOM.render(<Dashboard prop={Uname} />);
export default Dashboard;
