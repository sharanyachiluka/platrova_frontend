import React from 'react';
import image from './image.jpg';
import './UserProfile.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import HeaderAfterLog from './HeaderAfterLog';

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
         json:[],
        };

        this.HandleSubmit=this.HandleSubmit.bind(this);
    }

   

    HandleSubmit() {

    fetch ( "http://10.10.200.22:9000/restaurant/owner" , 
        {
            method: "GET",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
                
              },       
          
    }).then(result1=>result1.json())
    .then(result1 => {
        console.log(result1);
        
       this.setState ({
         json:result1,
          });

    })
    .catch(function(error){
        console.log(error);
   });
    }
    render() {
        
        return (
            
            <div>
            <HeaderAfterLog/>
            <div>
           
            
            <div class="card">
              <div>
                  {
                      
                      this.state.json.map((item) =>
                      
                      {item}
                      
                    )
                  }  
                  <input type="button" value="get restaurants" onClick={this.HandleSubmit}/> 
            </div>
            </div></div></div>
        );
    }
}

export default GetAllRest;