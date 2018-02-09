import React, { Component } from 'react';

import slide1 from './slide1.jpg';
import request from 'superagent';

import './Search.css';

import { Button, Form, Image } from 'react-bootstrap';



class Search extends React.Component {

    render() {

        return (
            <div class="container">
                <div class="col-lg-9" class="col-lg-10">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search for..." name="search" />
                    </div>
                    <div class="col-lg-7">
                        <div class="btn btn-block">
                            <Button bsStyle="danger" bsSize="medium float-right " href="#" active >
                                <span class="glyphicon glyphicon-search"></span>Search
                                    </Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Search;