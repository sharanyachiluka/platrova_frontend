import React, { Component } from 'react';
import image from './image.jpg'; 
import './LoginForm.css';
import request from 'superagent';
import {Router,BrowserRouter,Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

var divStyle = {
	width: "100%",
    height: "1140px",
	backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
	overflow:'hidden',
};
class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			json :[],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleSubmit(event) {

		event.preventDefault();

		this.setState({ value: event.target.value });

		var name = document.getElementById('name').value;
		var password = document.getElementById('password').value;
		var accesstoken,refreshtoken,expirytime;
		var role='user';
		var form = JSON.stringify({name : name, password : password});
		fetch ( "http://10.10.200.22:9000/users/login" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json"
                
              },       
            body: form, 
    }).then(result1=>result1.json())
    .then(function(result1){
        //accesstoken=window.localStorage.getItem('result1.access_token');
        //expirytime=window.localStorage.getItem('response.expiry_time');
		//refreshtoken=window.localStorage.getItem('response.refresh_token');
		console.log(result1);
       window.alert("Login successful");
        
		accesstoken = result1.access_token;
		role=result1.role;
		console.log(accesstoken);
		console.log(role);
        localStorage.setItem("accesstoken",result1.access_token);
        //result1.access_token=localStorage.getItem("accesstoken");
		//module.exports={data:"accesstoken"};
		localStorage.setItem("role",role);
       // result1.role=localStorage.getItem("role");
//module.exports={data:"role"}; 
		window.location.href="/myhome";      
    })
    .catch(function(error){
		window.alert("please enter correct details");
        console.log(error);
    });
       
    
    }

	handleNameChange(event) {
		this.setState({
			name: event.target.value,
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



	handlePasswordChange(event) {
		this.setState({
			password: event.target.value,

		});

	}
	render() {
		return (
			<div style={divStyle}>
			<div className="main-agileinfo slider ">
				<div className="items-group">
					<div className="item agileits-w3layouts">
						<div className="block text main-agileits">
							<span className="circleLight"></span>

							<div className="login-form loginw3-agile">
								<div className="agile-row">
									<h1>LOGIN</h1>
									<div className="login-agileits-top">
										<form autoComplete="off" onSubmit={this.handleSubmit}>
											<p>User Name </p>
											<input type="text"
												className="name"
												id="name"
												pattern="^[A-Za-z0-9_.-@]*$"
												maxLength="12"
												autoFocus
												placeholder="Enter username"
												onChange={this.handleNameChange}
												value={this.state.name} required />
											
											<p>Password</p>
											<input type="password"
												className="password"
												id="password"
												required pattern="^[A-Za-z0-9_.-@]*$"
												required minLength="6" maxLength="10"
												autoFocus
												placeholder="Enter password"
												onChange={this.handlePasswordChange}
												value={this.state.password} />
											<br />
											<input type="submit" value="Login" />
										</form>
										<div className="login-agileits-bottom wthree">
										<h6><Link to='/forgotpassword' class="active"> Forgot Password?</Link></h6>
									</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		);
	}
}

export default LoginForm;