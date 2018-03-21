import React from 'react';
import { Card, CardImg, CardText, 
    CardTitle, CardSubtitle,Row,Col,CardBody } from 'reactstrap';
  

    class LikesHoverResult extends React.Component {
        render () {
            return (

<div class="col-sm-3">
 
    
 <div class="ih-item circle colored effect3 left_to_right"><a href="#">
 
     <div class="img"><img src={this.props.image} alt="img"></img></div>
     <div class="info">
       <h3>{this.props.name}</h3>
       <p>{this.props.type}</p>
       <p>{this.props.cuisine}</p>
       <p>{this.props.area}</p>
     </div></a></div>


</div>
            );
            }
        }

export default LikesHoverResult;