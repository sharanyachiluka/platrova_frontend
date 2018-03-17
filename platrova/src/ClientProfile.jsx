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
/*var divStyle = {
    width: '100%',
}*/
var accesstoken=localStorage.getItem("accesstoken");
 
class ClientProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email : "",
            img :"",
        };
    }

   

    componentDidMount() {

    fetch ( "http://10.10.200.22:9000/users/me" , 
        {
            method: "GET",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
                
              },       
          
    }).then(result1=>result1.json())
    .then((result1) => {
        //console.log(result1);
       this.setState ({
         name:result1.userName,
        email:result1.email,
        img:result1.img,
        });
    })
    .catch(function(error){
        console.log(error);
   });
    }
    render() {
        return (
            <div><HeaderAfterLog/>
            <div>
            <br /><br /><br />
            <div className="title"><center><h1>My Profile</h1></center></div>
            <div class="card">
                <img src={this.state.img} height="400" width="500" />
            <div class="container">
                <center><h3><b>User Name:{this.state.name}</b></h3></center>
                <p>Email:{this.state.email}</p><br/>
                <div className="float-lt">
                <p><Button bsStyle="danger"><Link to='/restaurants' class="active">My Restaurants</Link></Button></p>
              </div>
              <div className="float-lt">
              <p><Button bsStyle="danger"><Link to='/updatepassword' class="active">Update Password</Link></Button></p></div>
                <div className="float-center">
                <p><Button bsStyle="danger"><Link to='/createres' class="active">Create Restaurant</Link></Button></p></div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default ClientProfile;
