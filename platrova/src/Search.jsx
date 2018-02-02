import React, { Component } from 'react';

import slide1 from './slide1.jpg';
import request from 'superagent';

class Search extends React.Component {

    render() {

        return (

            <div>

                <div class="col-lg-6">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for..." />
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        );


    }




}

export default Search;