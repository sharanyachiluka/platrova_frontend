import React, { Component } from 'react';

import slide1 from './slide1.jpg';
import request from 'superagent';
import './Search.css';

import { Button } from 'react-bootstrap';

class Search extends React.Component {

    render() {

        return (
            <body>

            <div>

                <div class="container">
                    <div class="col-lg-8" middle>
                    <div class="input-group">
                    
                  
                    
                        <input type="text" class="form-control"  placeholder="Search for..." name="search" />
                        <div class = "input-group-btn">
                        <Button bsStyle="danger" bsSize ="middle" href = "#" active >
                        
                        <span class="glyphicon glyphicon-search"></span>             Search
                        
                        
                        </Button>

                        
                        </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
                </body>
          
        );


    }




}

export default Search;