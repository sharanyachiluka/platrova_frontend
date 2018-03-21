import React, { Component } from 'react';
import request from 'superagent';
import back from './backgroundimg.png';
import './Search.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Router, Link } from 'react-router-dom';

var sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${back})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "2700px 700px",

};


class Search extends React.Component {

    constructor(props) {
                super(props);

        this.state = {
            search: "",


        }
        this.handleNearBy = this.handleNearBy.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }




    handleSearchChange(event) {
                this.setState({
                        search: event.target.value,
                });
        }

    handleNearBy(event) {
        window.location.href = "/nearbyresult";
    }

    render() {
        return (
            <section style={sectionStyle}>
                <div className="centered">
                    <div className="col-lg-15" className="col-lg-11">
                        <div className="mytexts"> <center>PLATROVA</center></div>
                        <form action="">
                            <div class="row">

                                <div class="input-group">
                                    <input type="text"
                                        id="search"
                                        class="form-control"
                                        size="120"
                                        placeholder="Enter the location or Restaurant name..."
                                        onChange={this.handleSearchChange}
                                        value={this.state.search} />
                                    <span class="input-group-btn">
                                        <button class="btn btn-danger" type="button"><Link to={'/searchresult/' + this.state.search} class="active" >Search</Link></button>
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className="center">
                            <div className="col-lg-15">
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
