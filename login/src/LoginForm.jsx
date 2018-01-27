import React, { Component } from 'react';

import grid from './grid.png'; 

import './LoginForm.css';
import request from 'superagent';


class LoginForm extends React.Component {
	

	render() {
		return (
			<body>
      <h1 class="wthree">PLATROVA</h1>
	<div class="container login-section">	
		<div class="login-w3l">	
			<div class="login-form">	
				<h2 class="wthree">LOGIN</h2>	
				
				<form action="#" method="post" class="agile_form">
						
					<div class="w3ls-name1">
						<label class="header">email</label>
						<input placeholder="email@example.com" name="Email" type="email" required=""/>
					</div>
					<div class="w3ls-name1">
						<label class="header">password</label>	
						<input placeholder="*****" name="first name" type="password" required=""/>
					</div>	
					<input type="submit" value="Signup"/>
				</form>
			</div>
		</div>	
			
		<div class="login-w3l-bg">
		 <img src="grid.png"/></div>
		<div class="clearfix"></div>	
	</div> 	
	
	</body>
			
		
		);
	}
}

export default LoginForm;