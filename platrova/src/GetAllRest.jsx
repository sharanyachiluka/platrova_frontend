import React from 'react';
import image from './image.jpg';
import './UserProfile.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import HeaderAfterLog from './HeaderAfterLog';
import Restaurant from './Restaurant';

var imageStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden'
}
var divStyle = {
    width: '100%',
}
var accesstoken=localStorage.getItem("accesstoken");

class GetAllRest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
         id:[],
        };

      
    }
componentDidMount() {
    fetch ( "http://10.10.200.22:9000/restaurant/owner" , 
    {
        method: "GET",     
        headers: {
            "Content-Type": "application/json",
            "Accept"    :   "application,json",
            "Authorization" : 'Bearer'+ accesstoken,
            
          },       
      
}).then(function(response){
    return(response.json());
    console.log(response.json);
}).then(result1 => this.setState ({
     id:result1
      }));
}
   

    
    render() {
       
//console.log(json);
   
  /* var Holder = [];
   for(var i=0;i<this.state.id.length;i++){
       console.log(this.state.id[i].name);
       Holder.push(
           (
               <Restaurant name={this.state.id[i].name}></Restaurant>
           )
       );
   }*/

        return (
            <div>
            <div>
            <HeaderAfterLog/>
            </div>
           
            
            <h1> Restaurants</h1>
          {this.state.id.map(function(id,i){
              return <li key={i}>{id.name}</li>
          })}
            </div>
        );
    }
}

export default GetAllRest;