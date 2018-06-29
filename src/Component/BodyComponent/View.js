import React, { Component } from 'react';

import {
  Link,
  Redirect
} from 'react-router-dom';



class View extends Component {

    // getInitialState(){
        state= {
            hobby:[],
            id:localStorage.getItem('user')
            // localStorage.setItem('hobbies',data.hobbies)
        }
    //}

    handleView(){
        const self = this;
        let UserId =this.state.id;
        fetch('/hobbies/view',{
             method:"POST",
             headers : new Headers(),
            body:JSON.stringify ({
                UserId: UserId
            }),
            headers: {
                "Content-Type": "application/json",
                
            }
            })
            .then((res)=>(res.json()))
            .then(function(data){
                if(data.success==true){
                    // localStorage.setItem('hobbies',data.hobby);
                    //alert(data.hobby[HobbyName]);
                    var x =data.hobby;
                    const mappingFunction = p => p.HobbyName;
                    // const mappingFunction2 = q => q.HobbyName;
                    // const ids= x.map(mappingFunction2);
                    // localStorage.setItem('some',ids);
                    const names= x.map(mappingFunction);
                    self.setState({hobby:names});
                }
                else{   
                    self.setState({hobby:[1,2,3]});
                }
               
            })
        }
        logout(){
            localStorage.setItem('user','');
        }
        // handleDelete(obj){
        //     let objt =obj;
        //     fetch('hobbies/delete',{
        //         method:"POST",
        //         headers : new Headers(),
        //        body:JSON.stringify ({
        //            HobbId: objt
        //        }),
        //        headers: {
        //            "Content-Type": "application/json",
                   
        //        }
        //     })
        // }
    


  render() {
      this.handleView();
    // var som =localStorage.get('some');
    var loop=this.state.hobby.map(function(item,index){
        return(
            <li>{item}</li>
        );
    });
    return (
      <div>
          <span className="back">Do you want to logout? <button onclick={this.logout()}><Link to="/" > logout</Link></button></span>
          <span id="bak"> <Link to="Dashboard"> Go Back !</Link> </span>
          <div id="view">
          <h1>Hobby Section</h1>
          <span id="hobb">
            <p>These are your hobbies</p>
            <ul>
                {loop}
                
            </ul>
            </span>
            </div>
      </div>
    );
  }
}

export default View;
