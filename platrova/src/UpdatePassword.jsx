import React from 'react';
import {Button} from 'react-bootstrap';
class UpdatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            oldpassword: "",
            newpassword: "",
            confirmpassword: "",
        };

        this.handleOldPasswordChange=this.handleOldPasswordChange.bind(this);
        this.handleNewPasswordChange=this.handleNewPasswordChange.bind(this);
        this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
    }

    handleOldPasswordChange(event) {
		this.setState({
			oldpassword: event.target.value,
		});
    }
    
    handleNewPasswordChange(event) {
		this.setState({
			newpassword: event.target.value,
		});
    }
    
    handleConfirmPasswordChange(event) {
		this.setState({
			confirmpassword: event.target.value,
		});
	}
    render () {
        return (
            <div>
                <label>Old Password</label>
              <input type="text"
                     id="oldpassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleOldPasswordChange}
					value={this.state.oldpassword} required/><br />
                     <label>New Password</label>
                    <input type="text"
                     id="newpassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleNewPasswordChange}
					value={this.state.newpassword} required/><br />
                     <label>Confirm Password</label>
                    <input type="text"
                     id="confirmpassword"
                     required pattern="^[A-Za-z0-9_.-@]*$"
					required minLength="6" maxLength="10"
					autoFocus
                     onChange={this.handleConfirmPasswordChange}
					value={this.state.confirmpassword} required/>
                    <Button bsStyle="danger">Update Password</Button>
                        
                    </div>
        );
    }
}

export default UpdatePassword;