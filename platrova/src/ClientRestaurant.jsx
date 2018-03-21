import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col } from 'reactstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


var accesstoken = localStorage.getItem("accesstoken");
class ClientRestaurant extends React.Component {

   
    render () {
        var Id=this.props.Id;
        return (
            <Col sm="4">
              <Card>
              <CardImg  width="400" height="400" src={this.props.img}  alt="Card image cap" />
           
                <CardTitle>Restaurant Name:{this.props.name}</CardTitle>
                <CardSubtitle>Address:{this.props.address}</CardSubtitle><br/>
                <CardSubtitle>Contact:{this.props.contact}</CardSubtitle><br/>
                <CardSubtitle>Hompage Url:{this.props.hpUrl}</CardSubtitle><br/>
                <CardSubtitle>Facebook Url:{this.props.fbUrl}</CardSubtitle><br/>
                <CardSubtitle>Cost per person:{this.props.cost}</CardSubtitle><br/>
                <CardSubtitle>Status:{this.props.status}</CardSubtitle><br/>
                <Button bsStyle="danger"><Link to= {'/editrestaurant/'+Id} class="active">Edit Restaurant</Link></Button>
               </Card>  
               </Col>
        );
    }
}
export default ClientRestaurant;