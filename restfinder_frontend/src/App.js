import React, { Component } from 'react';
import bg from './bg.jpg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div class="main-agileinfo slider ">
		<div class="items-group">
			<div class="item agileits-w3layouts">
				<div class="block text main-agileits"> 
					<span class="circleLight"></span> 
					
					<div class="login-form loginw3-agile"> 
						<div class="agile-row">
							<h1>Login Form</h1> 
							<div class="login-agileits-top"> 	
								<form action="#" method="post"> 
									<p>User Name </p>
									<input type="text" class="name" name="user name" required=""/>
									<p>Password</p>
									<input type="password" class="password" name="Password" required=""/>  
									<label class="anim">
										<input type="checkbox" class="checkbox"/>
										<span> Remember me ?</span> 
									</label>   
									<input type="submit" value="Login"/> 
								</form> 	
							</div> 
							<div class="login-agileits-bottom wthree"> 
								<h6><a href="#">Forgot password?</a></h6>
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

export default App;
