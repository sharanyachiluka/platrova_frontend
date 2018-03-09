import React, { Component } from 'react';
import request from 'superagent';
import background from './background.jpg';
import './Search.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Router, Link } from 'react-router-dom';

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
    keyword:"",
}
       
       this.handleSearchChange = this.handleSearchChange.bind(this);
    }

   
        

    handleSearchChange(event) {
        this.setState({
            keyword : event.target.value,
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
                                    value={this.state.keyword} />
                        </div>
                        <div className="col-lg-7">
                            <div className="btn btn-block">
                                <Button bsStyle="danger" bsSize="medium float-right" active >
                                    <span className="glyphicon glyphicon-search"></span><Link to={'/searchresult/'+this.state.keyword} class="active" >Search</Link>
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
