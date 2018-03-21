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
            <Col sm="4">
            <div class="box">
            <div class="clearfix">
           <img src={this.props.img} height="200" width="300"></img>
            &nbsp;&nbsp;  {this.props.name}<br/>
             Type: {this.props.type}<br/>
              Cuisine: {this.props.cuisine}<br/>
              Area: {this.props.area}</div><br/>
           <details>
               <summary><button type="button" class="btn btn-info">More Info</button></summary>
              <p>Address:{this.props.address}</p>
             <p>Contact:{this.props.contact}</p>
             <p>Timings:{this.props.timings}</p>
             <p>Homepage url:{this.props.hpUrl}</p>
             <p>Facebookpage url:{this.props.fbUrl}</p>
             <p>Cost:{this.props.cost}</p> 
       </details> 
              
            </div>
            </Col>
        );
    }
}

export default SearchRestaurant;