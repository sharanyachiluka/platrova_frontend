import React, { Component } from 'react';
//import grid from './grid.png'; 
import './LoginForm.css';
import request from 'superagent';


class LoginForm extends React.Component {
	 constructor(props) {
		 super(props);

		 this.state ={
			 name:"",
			 email:"",
			 password:"",
		 };
		 this.handleSubmit=this.handleSubmit.bind(this);
		 this.handleNameChange=this.handleNameChange.bind(this);
		 this.handleEmailChange=this.handleEmailChange.bind(this);
		 this.handlePasswordChange=this.handlePasswordChange.bind(this);
	 }

	 handleSubmit(event) {

		 event.preventDefault();

		 this.setState({ value: event.target.value });

		 var email = document.getElementById('email').value;
		 var password = document.getElementById('password').value;

		 request
				.post("http://10.10.200.21:9000/users/login")
				.send({ email: email, password: password })
				.then(
				(response) => {
					// response.body will be the returned data from your play app, which is an array of objects
					// I kept the data as object with "place" as the key, and [lat,longs] as value.
					// following code converts array of objects into the format which my component is accepting.
					console.log("response is ok");
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
											<p>email id </p>
											<input type="email"
												className="email"
												id="email"
												autoFocus
												placeholder="Enter email id"
												onChange={this.handleEmailChange}
												value={this.state.email} required />
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