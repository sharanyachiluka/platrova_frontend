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
            <i class="material-icons">restaurant</i> {this.props.type}<br/>
            <i class="material-icons">menu</i> {this.props.cuisine}<br/>
            <i class="material-icons">place</i>{this.props.area}</div><br/>
           <details>
               <summary><button type="button" class="btn btn-info">More Info</button></summary>
              <p><i class="material-icons">directions</i>{this.props.address}</p>
             <p><i class="material-icons">call</i>{this.props.contact}</p>
             <p><i class="material-icons" md-18>timer</i> {this.props.timings}</p>
             <p><i class="material-icons">language</i>{this.props.hpUrl}</p>
             <p><i class="material-icons">public</i>{this.props.fbUrl}</p>
             <p><i class="material-icons">star</i>Rs.{this.props.cost} for 2</p> 
       </details> 
              
            </div>
            </Col>
        );
    }
}

export default SearchRestaurant;