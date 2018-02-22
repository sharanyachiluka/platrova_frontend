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
/*var divStyle = {
    width: "100%",
    height: "1140px",
    backgroundImage: `url(${client})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    fontFamily: 'Cursive',
    
};*/
var form = {
    border: '2px solid white',
    fontFamily: 'Arial',
}
var textstyle = {
    color: 'black',
};
class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
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
				name.setCustomValidity("Username must contain only alphabets and numbers!");
			}
			else {
				name.setCustomValidity("");
			}
		});

	}

	handleEmailChange(event) {
		this.setState({
			email: event.target.value,
		});
		var email = document.getElementById("email");
		email.addEventListener("input", function (event) {
			if (email.validity.typeMismatch) {
				email.setCustomValidity("I expect an e-mail, darling!");
			} else {
				email.setCustomValidity("");
			}
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
                <h1>cccc</h1>
                <div className="col-md-12">
                    <div class="float-lt" >

                        <div class="login-w3l">	
                           
			                    <div class="top-img-agileits-w3layouts">
				                    <h2 class="sub-head-w3-agileits">Contact Us</h2>
				                        <p>Fillout the form below to learn more!</p>
				                            <div class="login-form-c">	
				                                 <form autoComplete="off" onSubmit={this.handleSubmit}>
                                                    <input type="text" 
                                                    className="name" 
                                                    id="name" 
                                                    placeholder="Restaurant Name" 
                                                    onChange={this.handleNameChange}
                                                    value={this.state.name}
                                                    required/>

                                                    <input type="email" 
                                                    className="Email"
                                                    id="email" 
                                                    autoFocus
                                                    placeholder="Email" 
                                                    onChange={this.handleEmailChange}
                                                    value={this.state.email}
                                                    required/>
                                                    
                                                    <input type="submit" value="Send"/>
                                                </form>
                                            </div>		
		                                </div>
                                    </div> 
                                </div>
                            </div>
			        	

                  
                            <div className="col-lg-12 col-lg-push-6">
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
                </body>

        );
    }
}

export default Client; 