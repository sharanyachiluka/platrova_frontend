import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col } from 'reactstrap';
import {Button} from 'react-bootstrap';

class Restaurant extends React.Component {
    render () {
        return (
            <Col sm="4">
              <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardTitle>Restaurant Name:{this.props.name}</CardTitle>
                <CardSubtitle>Address:{this.props.address}</CardSubtitle><br/>
                <CardSubtitle>Contact:{this.props.contact}</CardSubtitle><br/>
                <CardSubtitle>Hompage Url:{this.props.hpUrl}</CardSubtitle><br/>
                <CardSubtitle>Facebook Url:{this.props.fbUrl}</CardSubtitle><br/>
                <CardSubtitle>Cost per person:{this.props.cost}</CardSubtitle>
                <Button bsStyle="danger">Edit Restaurant</Button>
               </Card>  
               </Col>
        );
    }
}
export default Restaurant;