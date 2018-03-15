import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './Client.css';
import request from 'superagent';
 import bann from './bann.jpg';
 import HeaderAfterLog from './HeaderAfterLog';
 import axios,{ post } from 'axios';


let coords = {
    lat: 17.3850,
    lng: 78.4867
};


const params = { v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM' };
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
            name: "",
            type: "",
            cuisine:"",
            address: "",
            area:"",
            contact: "",
            timings:"",
            hpUrl: "",
            fbUrl: "",
            cost: "", 
            file : "",
            lat: "",
            lng: "",
            img:"",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleCuisineChange = this.handleCuisineChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleTimingsChange = this.handleTimingsChange.bind(this);
        this.handlehpUrlChange = this.handlehpUrlChange.bind(this);
        this.handlefbUrlChange = this.handlefbUrlChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.onDragEnd=this.onDragEnd.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        var name = document.getElementById('name').value;
         var type= document.getElementById('type').value;
         var cuisine= document.getElementById('cuisine').value;
        var address= document.getElementById('address').value;
        var area= document.getElementById('area').value;
        var contact = document.getElementById('contact').value;
         var timings= document.getElementById('timings').value;
        var hpUrl = document.getElementById('hpUrl').value;
        var fbUrl = document.getElementById('fbUrl').value;
        var cost = document.getElementById('cost').value;
        var file = document.getElementById('file').value;
        var lat = document.getElementById('latitude').value;
        var lng = document.getElementById('longitude').value;
        var refreshtoken,expirytime;
        var accesstoken=localStorage.getItem("accesstoken");
        var role='user';
        var form = JSON.stringify({name : name, type:type, cuisine:cuisine, address : address, area: area,  contact : contact, timings: timings, hpUrl : hpUrl, fbUrl : fbUrl, cost : cost, file:file,lat : lat, lng : lng,img:this.state.img});
        fetch ( "http://10.10.200.22:9000/new/restaurant" , 
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
        if(result1.name === name) {
            window.alert("Your Restaurant will be reviewed and updated");
        }
        else {
            window.alert("Please enter proper details");
        }
        
       })
       .catch(function(error){
           console.log(error);
       });
    }

       onDragEnd(e) {
        console.log('onDragEnd' + ' hii ' + e.latLng.lat(), e);
        //coords=e.latLng;
        coords.lat = e.latLng.lat();
        coords.lng = e.latLng.lng();
        this.setState({
            lat:coords.lat,
            lng:coords.lng,
        })
        console.log('after cords change '+coords.lat+' longii'+coords.lng);
        document.getElementById('latitude').value = e.latLng.lat()
        document.getElementById('longitude').value = e.latLng.lng()
       console.log(coords.lat);
        
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

    handleAddressChange(event) {
        this.setState({
            address: event.target.value,
        });
    }

    handleAreaChange(event) {
                this.setState({
                    area: event.target.value,
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
                    timings : event.target.value,
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
        var file,img;
        var self=this;
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
                    self.setState({
                        img: result.data,
                    });
                    console.log(this.state.img);
                    
                })
              
    }  
    

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

   
  
    onCloseClick() {

        console.log('onCloseClick');
    }

    onClick(e) {

        console.log('onClick ' + coords.lat + coords.lng + '  hello  ' + e.latlng, e.latlng);
        coords = e.latLng;
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
                                                    placeholder="Restaurant Name" 
                                                    onChange={this.handleNameChange}
                                                    value={this.state.name}
                                                    required/>
                                                    <input type="text" 
                                                    id="type" 
                                                    placeholder="Restaurant type Ex:FoodTruck,Bar & Restaurant,Café..." 
                                                    onChange={this.handleTypeChange}
                                                    value={this.state.type}
                                                    required/>
                                                     <input type="text" 
                                                    id="cuisine" 
                                                    placeholder="Cuisine Ex:South Indian,North Indian,Italian..." 
                                                    onChange={this.handleCuisineChange}
                                                    value={this.state.cuisine}
                                                    required/>
                
                                                    <input type="text" 
                                                    id="address" 
                                                    placeholder="Restaurant Address(Ex:HouseNo,Street}" 
                                                    onChange={this.handleAddressChange}
                                                    value={this.state.address}
                                                    required/>
                                                    <select id ="area" value ={this.state.area}
                                                    onChange={this.handleAreaChange}>
                                                    <option value="Area">Area</option>
                                                    <option value="Shaikpet">Shaikpet</option>
                                                    <option value="Banjara Hills">Banjara Hills</option>
                                                    <option value="Abids">Abids</option></select>
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
                                                     name="Country" 
                                                     placeholder="latitude"
                                                     id="latitude" 
                                                     value="" 
                                                     
                                                     readonly="readonly"/>
                                                     <input type="text" 
                                                     name="Country"
                                                     placeholder="longitude" 
                                                     id="longitude" 
                                                     value="" 
                                                     readonly="readonly"/>

                                                     <input type="file"
                                                    id="file"
                                                    onChange={this.handleFile}
                                                    value={this.state.file}/>
                                                    
                                                    <input type="submit" value="Send"/>
                                                </form>
                                            </div>      
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        

                  
                            <div className="col-lg-2 col-lg-push-7">
                            <div class = "float-rt">
                            <Gmaps
                                width={'1000px'}
                                height={'800px'}
                                lat={coords.lat}
                                lng={coords.lng}
                                zoom={12}
                                loadingMessage={'Be happy'}
                                params={params}
                                onMapCreated={this.onMapCreated}
                                onClick={this.onClick}>
                                <Marker
                                    lat={coords.lat}
                                    lng={coords.lng}
                                    draggable={true}
                                    onDragEnd={this.onDragEnd}
                                     />
                                <InfoWindow
                                    lat={coords.lat}
                                    lng={coords.lng}
                                    content={'Hello, Move me to the Restaurant  :)'}
                                    onCloseClick={this.onCloseClick} />
                            </Gmaps>
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


