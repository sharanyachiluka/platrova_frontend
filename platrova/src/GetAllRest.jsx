import React from 'react';
import image from './image.jpg';
import './UserProfile.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';
import HeaderAfterLog from './HeaderAfterLog';
import ClientRestaurant from './ClientRestaurant';

var imageStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden'
}
var divStyle = {
    width: '100%',
}
var accesstoken = localStorage.getItem("accesstoken");

class GetAllRest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: [],
        };


    }

    componentDidMount() {
        fetch("http://10.10.200.22:9000/restaurant/owner",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application,json",
                    "Authorization": 'Bearer' + accesstoken,

                },

            }).then(function (response) {
                return (response.json());
            }).then(result1 => this.setState({
                id: result1
            }));
        }


    render() {
        var Holder = [];
        for (var i = 0; i < this.state.id.length; i++) {
            console.log(this.state.id[i].name);
            Holder.push(
                (
                    <ClientRestaurant Id={this.state.id[i].id}
                                name={this.state.id[i].name} 
                                address={this.state.id[i].address}
                                contact={this.state.id[i].contact}
                                hpUrl={this.state.id[i].homepageUrl}
                                fbUrl={this.state.id[i].fbUrl}
                                cost={this.state.id[i].cost} ></ClientRestaurant>
                )
            );
        }

        return (
            <div>
                <HeaderAfterLog /><br /><br />
                <h1><font color="white">Restaurants</font></h1>
                 {Holder}
            </div>
        );
    }
}

export default GetAllRest;