import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './Client.css';
import request from 'superagent';
 import bann from './bann.jpg';
 import HeaderAfterLog from './HeaderAfterLog';
 import axios,{ post } from 'axios';

var bg = {
    width: "100%",
    height: "1290px",
    backgroundImage: `url(${bann})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    overflow:'hidden',

}
var mar = {
    margin: '50px 700px 30px 600px',
}
var textstyle = {
    color: 'white',
};





var accesstoken=localStorage.getItem("accesstoken");
class EditRest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           id:[],
            Id:"",
            name: "",
            type: "",
            cuisine: "",
            address: "",
            contact: "",
            hpUrl: "",
            fbUrl: "",
            cost: "", 
            status: "",
            img:"",
            image:"",
           
        };

        
    }


    componentDidMount() {
       
  console.log(this.props.match.params.Id);
        fetch ( "http://10.10.200.22:9000/restaurant/get/"+this.props.match.params.Id , 
            {
                method: "GET",     
                headers: {
                    "Content-Type": "application/json",
                    "Accept"    :   "application,json",
                    "Authorization" : 'Bearer'+ accesstoken,
                    
                  }, 
                      
              
        }).then(result1=>result1.json())
        .then((result1) => {
            console.log(result1);
           this.setState ({
           //    id:result1,
             name:result1.name,
             type: result1.type,
            cuisine: result1.cuisine,
            address: result1.address,
            area: result1.area,
            contact: result1.contact,
            timings:result1.timings,
            hpUrl: result1.homepageUrl,
            fbUrl: result1.fbUrl,
            cost: result1.cost, 
            status: result1.status,
            img:result1.img,
           
            });
           if(this.state.status === "New"){
               this.setState ({
                   status :"Yet to be Reviewed",
               })
           }
            
        })
        .catch(function(error){
            console.log(error);
       });


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleCuisineChange = this.handleCuisineChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleTimingsChange = this.handleTimingsChange.bind(this);
        this.handlehpUrlChange = this.handlehpUrlChange.bind(this);
        this.handlefbUrlChange = this.handlefbUrlChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.handleFile = this.handleFile.bind(this);

  }




    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        
        var type = document.getElementById('type').value;
        var cuisine = document.getElementById('cuisine').value;
        var address= document.getElementById('address').value;
        var area= document.getElementById('area').value;
        var contact = document.getElementById('contact').value;
        var timings = document.getElementById('timings').value;
        var hpUrl = document.getElementById('hpUrl').value;
        var fbUrl = document.getElementById('fbUrl').value;
        var cost = document.getElementById('cost').value;
        var status = document.getElementById('status').value;
        var refreshtoken,expirytime;
        var accesstoken=localStorage.getItem("accesstoken");
        var role='user';
        var form = JSON.stringify({name : this.state.name, type:type, cuisine: cuisine, address : address,contact : contact, timings: timings, hpUrl : hpUrl, fbUrl : fbUrl, cost : cost, status: status,image:this.state.image});
        fetch ( "http://10.10.200.22:9000/restaurant/edit" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                "Authorization" : 'Bearer'+ accesstoken,
              },       
            body: form, 
    }).then(result1 => result1.json())
    .then(function(result1){
        console.log(result1);
        /*accesstoken = result1.access_token;
        //role=result1.role;
        //console.log(accesstoken);
        //console.log(role);
        localStorage.setItem("accesstoken",result1.access_token);
        localStorage.setItem("role",role);*/
      console.log("sent")
        
       })
       .catch(function(error){
           console.log(error);
       });
    }

      
    
    handleTypeChange(event) {
        this.setState({
            type: event.target.value,
        });
    }

    handleCuisineChange(event) {
                this.setState({
                    cuisine: event.target.value,
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

    handleTimingsChange(event) {
                this.setState({
                    timings: event.target.value,
                });
    }
     

    handlehpUrlChange(event) {
        this.setState({
            hpUrl : event.target.value,
        });
var hpUrl = document.getElementById("hpUrl");
    hpUrl.addEventListener("input", function (event) {

        if (hpUrl.validity.patternMismatch) {
         hpUrl.setCustomValidity("url should be of format https?://.+");
        }
        else {
            hpUrl.setCustomValidity("");
        }
    });
    }
    
    handlefbUrlChange(event) {
        this.setState({
            fbUrl : event.target.value,
        });
var fbUrl = document.getElementById("fbUrl");
    fbUrl.addEventListener("input", function (event) {

        if (fbUrl.validity.patternMismatch) {
         fbUrl.setCustomValidity("url should be of format https?://.+");
        }
        else {
            fbUrl.setCustomValidity("");
        }
    });
    }
    
    handleCostChange(event) {
        this.setState({
            cost : event.target.value,
        });
var cost = document.getElementById("cost");
    cost.addEventListener("input", function (event) {

        if (cost.validity.patternMismatch) {
         cost.setCustomValidity("cost must contain only digits");
        }
        else {
            cost.setCustomValidity("");
        }
    });
    }
    
handleFile(event) {
    var file,image;
    var current=this;
    console.log(event.target.files[0]);
 
  /*  this.setState({
       file : event.target.files[0]   
        });*/

        const url = 'http://10.10.200.22:9000/images';
        const formData = new FormData();
       
        formData.append('file',event.target.files[0]);
      
        const config={
            
            headers: {
                'content-type': 'multipart/form-data',
                'accept'     : 'application/json'
             }
        }
        console.log("be");
     //   return post(url,formData,config)
        axios.post(
            url,formData,config )
            .then(result => {
                console.log(result.data);
                current.setState({
                    image: result.data,
                });
                console.log(this.state.image);
                
            })
          
}  

    render() {
        var Holder = [];
        for(var i = 0; i< this.state.id.length;i++) {

            console.log(this.state.id[i].name);
            Holder.push(
                
            )
        }
        return (
            <div>
            <HeaderAfterLog/><br />
            <body>
               <div style={bg}> 
              <div className="col-md-9">
                    <div class="float-center" >
                    <div style={mar}>
                        <div class="login-w3l" > 
                        
                                <div class="top-img-agileits-w3layouts">
                                    <h2 class="sub-head-w3-agileits">Platrova</h2>
                                        <p>Create Accounts..Make Profits..</p>
                                            <div class="login-form-c">  
                                                 <form autoComplete="off" onSubmit={this.handleSubmit}>
                                                    <img src = {this.state.img} alt="image" width="250" height="210" /><br/><br/>

                                                    <input type="file" id="img" 
                                                    onChange={this.handleFile} 
                                                    value= {this.state.file} />   <br/>                              

                                                    <input type="text"
                                                          id="name"
                                                          value={this.state.name} disabled="disabled"
                                                       />
                                                    <input type="text" 
                                                    id="type" 
                                                      placeholder="Ex:FoodTruck,Restaurant,Café..." 
                                                    onChange={this.handleTypeChange}
                                                    value={this.state.type}
                                                    required/>                                          
                                                     <input type="text" 
                                                    id="cuisine"
                                                    placeholder="Ex:North Indian, South Indian, Chinese, Italian..." 
                                                    onChange={this.handleCuisineChange}
                                                    value={this.state.cuisine}
                                                    required/>                                               
                                                    <input type="text" 
                                                    id="address"
                                                    placeholder="Address"
                                                    value={this.state.address}
                                                    required/>
                                                    <input type="text" 
                                                    id="area"
                                                    placeholder="Area"
                                                    value={this.state.area}
                                                    required disabled="disabled"/>
                                                    <input type="text" 
                                                    id="contact" 
                                                    placeholder="Contact" 
                                                    pattern="[0-9]{10}"
                                                    onChange={this.handleContactChange}
                                                    value={this.state.contact}
                                                    required/>

                                                     <input type="text" 
                                                    id="timings" 
                                                    placeholder="Timings.Ex:10AM-9PM..."
                                                    onChange={this.handleTimingsChange}
                                                    value={this.state.timings}
                                                    required/>

                                                    <input type="text" 
                                                    id="hpUrl" 
                                                    placeholder="Homepage Url" 
                                                    pattern="https?://.+"
                                                    onChange={this.handlehpUrlChange}
                                                    value={this.state.hpUrl}
                                                    required/>
                                                    <input type="text" 
                                                    id="fbUrl" 
                                                    placeholder="Facebook Url" 
                                                    onChange={this.handlefbUrlChange}
                                                    value={this.state.fbUrl}
                                                    pattern="https?://.+"
                                                    required/>
                                                    <input type="text" 
                                                    id="cost" 
                                                    placeholder="Cost per person" 
                                                    onChange={this.handleCostChange}
                                                    value={this.state.cost}
                                                    pattern="{0-9}"
                                                    required/>
                                                     <input type="text" 
                                                    id="status"
                                                    placeholder="Status of Restaurant"
                                                    value={this.state.status}
                                                    disabled="disabled"/>
                                                   
                                                    <input type="submit" value="Send"/>
                                                </form>
                                            </div>      
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

export default EditRest; 

