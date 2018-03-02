import React from 'react';

class EditUserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email : "",
            likes:"",
        };

        this.handleLikesChange = this.handleLikesChange.bind(this);
    }

componentDidMount() {
    fetch ( "http://10.10.200.22:9000/users/profile" , 
            {
                method: "GET",     
                headers: {
                    "Content-Type": "application/json",
                    "Accept"    :   "application,json",
                    "Authorization" : 'Bearer'+ accesstoken,
                    
                  },       
              
        }).then(result1=>result1.json())
        .then((result1) => {
            //console.log(result1);
           this.setState ({
             name:result1.userName,
            email:result1.email,
            });
            
        })
        .catch(function(error){
            console.log(error);
       });
    }
       handleLikesChange(event) {
		this.setState({
			likes: event.target.value,
		});
    }


    render () {
        return (
            <div>
            <HeaderAfterLog/>
            <div>
            <br /><br /><br />
            <div className="title"><center><h1>My Profile</h1></center></div>
            <div class="card">
                <img src="image.jpg" style={divStyle}/>
            <div class="container">
                <center><h3><b>User Name:{this.state.name}</b></h3></center>
                <p>Email:{this.state.email}</p>
                <p><input type="text"
                          id="likes"
                          value={this.state.likes}
                          onChange={this.handleLikesChange}
                          value={this.state.likes} required/></p>
                </div>
                </div>
                </div>
                </div>
        );
    }
}