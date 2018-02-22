import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import './Client.css';
import request from 'superagent';
 import bann from './bann.jpg';

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
class Client extends React.Component {
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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handlehpUrlChange = this.handlehpUrlChange.bind(this);
        this.handlefbUrlChange = this.handlefbUrlChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
    }
    handleSubmit(event) {

        event.preventDefault();

        this.setState({ value: event.target.value});

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        
       /* request
            .post("http://localhost/clients")
            .send({ name: name, email:email})
            .then(
                (response) => {
                    console.log("ok");
                }
            );*/
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
     
    handleAddressChange(event) {
        this.setState({
            address: event.target.value,
        });
    }

    handleContactChange(event) {
        this.setState({
            contact : event.target.value,
        });
    }

    handlehpUrlChange(event) {
        this.setState({
            hpUrl : event.target.value,
        });
    }
    
    handlefbUrlChange(event) {
        this.setState({
            fbUrl : event.target.value,
        });
    }
    
    handleCostChange(event) {
        this.setState({
            cost : event.target.value,
        });
    }
    
    
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd' + ' hii ' + e.latLng.lat(), e);
        //coords=e.latLng;
        coords.lat = e.latLng.lat();
        coords.lng = e.latLng.lng();
        // console.log('after cords change '+coords.lat+' longii'+coords.lng);
        document.getElementById('latitude').value = e.latLng.lat()
        document.getElementById('longitude').value = e.latLng.lng()

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
                                                    <div style={textstyle} onTypeChange={this.handleTypeChange}>
                                                    Restaurant type:
                                                    <br />
                                                        <input type="checkbox" 
                                                        id="type" 
                                                        name="type"
                                                        autoFocus
                                                        value="North-Indian" 
                                                        style={textstyle}
                                                        />&nbsp;&nbsp;North Indian
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" 
                                                        id="type" 
                                                        name="type"
                                                        autoFocus
                                                        value="South-Indian" 
                                                        style={textstyle}
                                                        />&nbsp;&nbsp;South-Indian
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" 
                                                        id="type" 
                                                        name="type"
                                                        autoFocus
                                                        value="Italian" 
                                                        style={textstyle}
                                                        />&nbsp;&nbsp;Italian
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <input type="checkbox" 
                                                        id="type" 
                                                        name="type"
                                                        autoFocus
                                                        value="Chinese" 
                                                        style={textstyle}
                                                        />&nbsp;&nbsp;Chinese
                                                    </div><br />
                                                    <input type="text" 
                                                    id="address" 
                                                    placeholder="Restaurant Address" 
                                                    onChange={this.handleAddressChange}
                                                    value={this.state.address}
                                                    required/>
                                                    <input type="text" 
                                                    id="contact" 
                                                    placeholder="Contact" 
                                                    onChange={this.handleContactChange}
                                                    value={this.state.contact}
                                                    required/>
                                                    <input type="text" 
                                                    id="hpUrl" 
                                                    placeholder="Homepage Url" 
                                                    onChange={this.handlehpUrlChange}
                                                    value={this.state.hpUrl}
                                                    required/>
                                                    <input type="text" 
                                                    id="fbUrl" 
                                                    placeholder="Facebook Url" 
                                                    onChange={this.handlefbUrlChange}
                                                    value={this.state.fbUrl}
                                                    required/>
                                                    <input type="text" 
                                                    id="cost" 
                                                    placeholder="Cost per person" 
                                                    onChange={this.handleCostChange}
                                                    value={this.state.cost}
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
                                    onDragEnd={this.onDragEnd} />
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

        );
    }
}

export default Client; 
