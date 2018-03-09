import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col,CardBody } from 'reactstrap';
import './SearchRestaurant.css';

var divstyle ={
  color:'black',
}

class SearchRestaurant extends React.Component {
    render () {
        return (
          <Row>
          <div class="box">
          
            <p>Restaurant Name:{this.props.name}</p>
            <p>Restaurant Type:{this.props.type}</p>
            <p>Cuisine:{this.props.cuisine}</p>
            <p>Address:{this.props.address}</p>
            <p>Area:{this.props.area}</p>
           <p>Contact:{this.props.contact}</p>
           <p>Timings:{this.props.timings}</p>
           <p>Homepage url:{this.props.hpUrl}</p>
           <p>Facebookpage url:{this.props.fbUrl}</p>
           <p>Cost:{this.props.cost}</p>           
          </div>
          </Row>
        );
    }
}

export default SearchRestaurant;