import React from 'react';
import image from './image.jpg';
import './UserProfile.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

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
var accesstoken = localStorage.getItem("accesstoken");
console.log(accesstoken);

fetch ( "http://10.10.200.22:9000/users/me" , 
        {
            method: "GET",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
                
              },       
          
    }).then(result1=>result1.json())
    .then(function(result1){
        console.log(result1);
    })
    .catch(function(error){
        console.log(error);
   });
   
class UserProfile extends React.Component {
    render() {
        return (
            <div>
            <br /><br /><br />
            <div className="title"><center><h1>My Profile</h1></center></div>
            <div class="card">
                <img src="image.jpg" style={divStyle}/>
            <div class="container">
                <center><h3><b>User Name</b></h3></center>
                <p>Email:sample@gmail.com</p>
                <p>Likes:xxx,xxxx,xxxx</p>
                <p><Button bsStyle="danger"><Link to='/editprofile' class="active">Edit Profile</Link></Button></p>
                <p><Button bsStyle="danger"><Link to='/updatepassword' class="active">Update Password</Link></Button></p>
            </div>
            </div>
            </div>
        );
    }
}

export default UserProfile;