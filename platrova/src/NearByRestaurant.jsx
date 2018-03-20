import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col,CardBody } from 'reactstrap';
    import './SearchRestaurant.css';

    class NearByRestaurant extends React.Component {
        render () {
            return (
              <Row>
              <div class="box">
                <p><img src={this.props.img} height="200" width="200"></img>&nbsp;&nbsp;
                <h1>{this.props.name}</h1>
                   <h4>{this.props.type}
                    {this.props.cuisine}</h4></p>
                <p>Area:{this.props.area}</p>
                <p>Address:{this.props.address}</p>
               <p>Contact:{this.props.contact}</p>
               <p>Timings:{this.props.timings}</p>
               <p>Homepage url:{this.props.hpUrl}</p>
               <p>Facebookpage url:{this.props.fbUrl}</p>
               <p>Cost:{this.props.cost}</p> 
               <p>Distance:{this.props.distance}km</p>          
              </div>
              </Row>
            );
        }
    }
    
    export default NearByRestaurant;   
