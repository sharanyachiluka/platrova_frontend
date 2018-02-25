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
var accesstoken=localStorage.getItem("accesstoken");
 
class GetAllRest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            address: "",
            contact: "",
            hpUrl: "",
            fbUrl: "",
            cost: "", 
            lat: "",
            lng: "",
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
         type: result1.type,
         address: result1.address,
         contact: result1.contact,
         hpUrl: result1.hpUrl,
         fbUrl: result1.fbUrl,
         cost: result1.cost, 
         lat: result1.lat,
         lng: result1.lng,

        });
    })
    .catch(function(error){
        console.log(error);
   });
    }
    render() {
        return (
            <div>
            <br /><br /><br />
            <div className="title"><center><h1>My Restaurants</h1></center></div>
            <div class="card">
                <img src="image1.jpg" style={divStyle}/>
            <div class="container">
                <center><h3><b>Restaurant Name:{this.state.name}</b></h3></center>
                <p>Type:{this.state.type}</p>
                <p>Address:{this.state.address}</p>
                <p>Contact:{this.state.contact}</p>
                <p>Website:{this.state.hpUrl}</p>
                <p>Facebook:{this.state.fbUrl}</p>
                <p>Cost:{this.state.cost}</p>
                <p>Latitude:{this.state.lat}</p>
                <p>Longitude:{this.state.lng}</p>                
                <p><Button bsStyle="danger"><Link to='/editprofile' class="active">Edit Restaurant</Link></Button></p>
            </div>
            </div>
            </div>
        );
    }
}

export default GetAllRest;