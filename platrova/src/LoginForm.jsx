import React, { Component } from 'react';
import grid from './grid.png'; 
import './LoginForm.css';
import request from 'superagent';


class LoginForm extends React.Component {
	 constructor(props) {
		 super(props);

		 this.state ={
			 email:"",
			 password:"",
		 };
		 this.handleSubmit=this.handleSubmit.bind(this);
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

	 handleEmailChange(event) {
		this.setState({
			email: event.target.value,

		});

	}

		handlePasswordChange(event) {
			this.setState({
				password: event.target.value,
	
			});
	
	}
	render() {
		return (
			<div>
              <h1 className="wthree">PLATROVA</h1>
	           <div className="container login-section">	
		        <div className="login-w3l">	
			     <div className="login-form">	
				 <h2 className="wthree">LOGIN</h2>	
				  <form  className="agile_form" onSubmit={this.handleSubmit}>
		            <div className="w3ls-name1">
					 <label className="header">email</label>
					 <input placeholder="email@example.com" 
							id="email" 
							type="email" 
							required=""
							onChange={this.handleEmailChange}
							value={this.state.email}/>
					</div>
				    <div className="w3ls-name1">
					 <label className="header">password</label>	
					 <input placeholder="*****" 
							id="password" 
							type="password" 
							required=""
							onChange={this.handlePasswordChange}
							value={this.state.password}/>
				     </div>
					 <input type="submit" value="Signup"/><br></br>
					 <a href="#">Login with Username?</a>
					 <a href="#">forgot password?</a>	
					
					</form>
			     </div>
		        </div>	
			    <div className="login-w3l-bg">
		        <img src="grid.png"/></div>
		        <div className="clearfix"></div>	
	           </div> 
			   	
	</div>
	        
			
		
		);
	}
}

export default LoginForm;