import React, { Component } from 'react';
import request from 'superagent';
import background from './background.jpg';
import './Search.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import Geolocation from "react-geolocation";

var sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

};


class Search extends React.Component {

    constructor(props) {
        super(props);
        
this.state={
    search:"",
    lat:"",
    lng:"",
}
         this.handleNearBy = this.handleNearBy.bind(this);
       this.handleSearchChange = this.handleSearchChange.bind(this);
    }

   
        

    handleSearchChange(event) {
        this.setState({
            keyword : event.target.value,
        });
    }

    handleNearBy(event) {


        
            navigator.geolocation.getCurrentPosition(
              position => {
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});

                var form = JSON.stringify({lat:this.state.lat, lng: this.state.lng});
                fetch ( "http://10.10.200.22:9000/restaurant/nearBy" , 
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
                console.log("sent");            
               
            })
            .catch(function(error){
              
                console.log(error);
            });

              },
              error => console.log(error)
            );      
        
    }

    render() {
        return (
            <section style={sectionStyle}>
                <div className="centered">
                    <div className="col-lg-15" className="col-lg-11">
                        <div className="mytexts"> <center>PLATROVA</center></div>
                        <div className="form-group">
                            <input  type="text" 
                                    className="form-control" 
                                    placeholder="Enter the location or Restaurant name..." 
                                    id="search" 
                                    size="200"
                                    onChange={this.handleSearchChange}
                                    value={this.state.search} />
                        </div>
                        <div className ="center">
                        <div className="col-lg-8">
                            <div className="btn btn-block">
                                <Button bsStyle="danger" bsSize="medium float-right" active >
                                    <span className="glyphicon glyphicon-search"></span><Link to={'/searchresult/'+this.state.search} class="active" >Search</Link>
                                 </Button>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="btn btn-block">
                            <Button bsStyle="danger" bsSize="medium float-center" onClick={this.handleNearBy} active >
                                    <span className="glyphicon glyphicon-search"></span>NearBy
                                 </Button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Search;
