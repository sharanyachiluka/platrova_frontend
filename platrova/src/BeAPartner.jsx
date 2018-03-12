import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            contact: "",
           
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFnameChange = this.handleFnameChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        var fname = document.getElementById('fname').value;
        var contact = document.getElementById('contact').value;
        var refreshtoken,expirytime;
        var accesstoken=localStorage.getItem("accesstoken");
        var form = JSON.stringify({ fname: fname,contact : contact });
        fetch ( "http://10.10.200.22:9000/user/makeClient" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },       
            body: form, 
    }).then(function (response) {
        if(response.status>=400){
           throw new Error("Please enter proper details ");
        }
        else{
            console.log("Details sent");
            window.alert("The details will be reviewed");
        }
    })
}
       

       handleFnameChange(event) {
        this.setState({
            fname: event.target.value,
        });
        var fname = document.getElementById("fname");
        fname.addEventListener("input", function (event) {

            if (fname.validity.patternMismatch) {
                fname.setCustomValidity("Name must contain only alphabets!");
            }
            else {
                fname.setCustomValidity("");
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
                                                    id="fname" 
                                                    placeholder="Full Name" 
                                                    onChange={this.handleFnameChange}
                                                    value={this.state.fname}
                                                    required/>
        
                                                    <input type="text" 
                                                    id="contact" 
                                                    placeholder="Contact" 
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

export default Client; 

