import React from 'react';
import bg from './bg.jpg';
import './index.css';
import request from 'superagent';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  name: "",
		  password: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePasswordChange=this.handlePasswordChange.bind(this);
	}
	
	handleSubmit(event) {
        event.preventDefault();
		
		request
		.post("http://localhost:9000/users")
		.send({name: this.state.name ,password: this.state.password})
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
							<h1>SIGN UP</h1> 
							<div className="login-agileits-top"> 	
								<form onSubmit={this.handleSubmit}> 
									<p>User Name </p>
									<input type="text" 
												 className="name" 
												 id="name" 
												 required=""
												 onChange={this.handleNameChange}
                         value={this.state.name} />
									<p>Password</p>
									<input type="password" 
												 className="password" 
												 id="password"
												 required=""
												 onChange={this.handlePasswordChange}
												 value={this.state.password}/>  
									<label className="anim">
										<input type="checkbox" className="checkbox"/>
										<span> Remember me ?</span> 
									</label>   
									<input type="submit" value="Login"/> 
								</form> 	
							</div> 
							<div className="login-agileits-bottom wthree"> 
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
