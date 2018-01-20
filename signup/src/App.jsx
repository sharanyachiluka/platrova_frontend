import React  from 'react';
import bg from './bg.jpg';
import './index.css';
import request from 'superagent';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		request
			.post("http://10.10.200.21:9000/users")
			.send({ name: this.state.name, email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword })
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
	}

	handlePasswordChange(event) {
		this.setState({
			password: event.target.value,
		
		});
		
	}

	handleConfirmPasswordChange(event) {
		this.setState({
			confirmPassword: event.target.value,

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
										<form autoComplete= "off" onSubmit={this.handleSubmit}>
											<p>User Name </p>
											<input type="text"
												className="name"
												id="name"
												pattern = "^[A-Za-z0-9_.-@]*$"
												maxLength = "12"
												autoFocus
											    placeholder = "Enter username"
												onChange={this.handleNameChange}
												value={this.state.name} required/>
											<p>email id </p>
											<input type="email"
												 className="email"
												 id="email"
												autoFocus
												placeholder = "Enter email id"
												onChange={this.handleEmailChange}
												value={this.state.email} required/>
											<p>Password</p>
											<input type="password"
												className="password"
												id="password"
												required pattern = "^[A-Za-z0-9_.-@]*$"
												maxLength = "10"
												autoFocus
												placeholder = "Enter password"
												onChange={this.handlePasswordChange}
												value={this.state.password}/>
											<p>Confirm Password</p>
											<input type="password"
												className="confirmpassword"
												id="confirmpassword"
												required pattern = "^[A-Za-z0-9_.-@]*$"
												required maxLength = "10"
												autoFocus												
												onChange={this.handleConfirmPasswordChange}
												value={this.state.confirmPassword} />
											<label className="anim">
												<input type="checkbox" className="checkbox" />
												<span> Remember me ?</span>
											</label>
											<input type="submit" value="Sign up" />
										</form>
									</div>
									<div className="login-agileits-bottom wthree">
										<h6><a href="#">Already a user? Login</a></h6>
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