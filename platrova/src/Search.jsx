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
    render() {
        return (
            <section style={sectionStyle}>
                <div className="centered">
                    <div className="col-lg-15" className="col-lg-11">
                        <div className="mytexts"> <center>PLATROVA</center></div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter the location..." name="search" size="200" />
                        </div>
                        <div className="col-lg-7">
                            <div className="btn btn-block">
                                <Button bsStyle="danger" bsSize="medium float-right" href="#" active >
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