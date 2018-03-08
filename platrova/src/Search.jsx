import React, { Component } from 'react';
import request from 'superagent';
import background from './background.jpg';
import './Search.css';
import { Button } from 'react-bootstrap';

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
}
       
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearch (event) {

        event.preventDefault();

        this.setState({ value: event.target.value });

        var search = document.getElementById('search').value;
        var form = JSON.stringify({search :search});
        fetch ( "http://10.10.200.22:9000/restaurant/search" , 
        {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
                "Accept"    :   "application,json",
                
                   },     
                   body: form,    
          
    }).then(result1=>result1.json())
    .then((result1) => {
        console.log(result1);
    })
    .catch(function(error){
        console.log(error);
   });
    }
        

    handleSearchChange(event) {
        this.setState({
            search : event.target.value,
        });
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
                        <div className="col-lg-7">
                            <div className="btn btn-block">
                                <Button bsStyle="danger" bsSize="medium float-right" onClick={this.handleSearch} active >
                                    <span className="glyphicon glyphicon-search"></span>Search
                                 </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default Search;
