import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './Client.css';
import request from 'superagent';
 import bann from './bann.jpg';
 import HeaderAfterLog from './HeaderAfterLog';


var bg = {
    width: "100%",
    height: "1140px",
    backgroundImage: `url(${bann})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    overflow:'hidden',
}
var textstyle = {
    color: 'white',
};

var accesstoken=localStorage.getItem("accesstoken");
class BecomePartner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            contact: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        var name = document.getElementById('name').value;
        var contact = document.getElementById('contact').value;
       
        var refreshtoken,expirytime;
        var accesstoken=localStorage.getItem("accesstoken");
        var role='user';
        var form = JSON.stringify({name: name,contact : contact});
        fetch ( "http://10.10.200.22:9000/user/makeClient" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },       
            body: form, 
    })
    .then(function(response){
        if (response.status>=400){
            throw new Error("Bad response from server");}      
    })
    .then(function(data){
               console.log("sent");
        window.alert("You will receive an email soon");
        
    });
            
    }    
     

       handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
        var name = document.getElementById("name");
        name.addEventListener("input", function (event) {

            if (name.validity.patternMismatch) {
                name.setCustomValidity("Restaurant must contain only alphabets and numbers!");
            }
            else {
                name.setCustomValidity("");
            }
        });

    }
    
    handleContactChange(event) {
        this.setState({
            contact : event.target.value,
        });
    var contact = document.getElementById("contact");
    contact.addEventListener("input", function (event) {

        if (contact.validity.patternMismatch) {
         contact.setCustomValidity("Contact number must contain 10 digits");
        }
        else {
            contact.setCustomValidity("");
        }
    });
    }


    
    

    render() {
        return (
            <div>
            <HeaderAfterLog/><br />
            <body>
               <div style={bg}>
                <div className="col-md-3">
                    <div class="float-lt" >

                        <div class="login-w3l"> 
                           
                                <div class="top-img-agileits-w3layouts">
                                    <h2 class="sub-head-w3-agileits">Platrova</h2>
                                        <p>Create Accounts..Make Profits..</p>
                                            <div class="login-form-c">  
                                                 <form autoComplete="off" onSubmit={this.handleSubmit}>
                                                    <input type="text" 
                                                    id="name" 
                                                    placeholder="Enter your username" 
                                                    onChange={this.handleNameChange}
                                                    value={this.state.name}
                                                    required/>
                                                                              
                                                   
                                                    <input type="text" 
                                                    id="contact" 
                                                    placeholder="Enter your contact details" 
                                                    pattern="[0-9]{10}"
                                                    onChange={this.handleContactChange}
                                                    value={this.state.contact}
                                                    required/>
                                                                                                       
                                                    <input type="submit" value="Send"/>
                                                </form>
                                            </div>      
                                        </div>
                                    </div> 
                                </div>
                            </div>
                   
                    <div class="clear"></div>
                        <div class="footer-agileits">
                        </div>
                        </div>
                </body>
</div>
        );
    }
}

export default BecomePartner; 

