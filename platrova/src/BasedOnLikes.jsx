import React from 'react';
import './CircleEffect.css';
import LikesHoverResult from './LikesHoverResult';

var divStyle = {
    width: "100%",
    height: "600px",
    backgroundColor:'#1B1C1D',
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
    overflow:'hidden',
    color:'white',
    fontWeight:'55px',
 
};
var accesstoken=localStorage.getItem("accesstoken");
class BasedOnLikes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            image: "",
            type:"",
            timings:"",
            area:"",
            cuisine:"",
            id:[],
        };
    }

    componentDidMount() {

        fetch ( "http://10.10.200.22:9000/restaurant/likes" ,
    {
        method: "GET" ,
        headers: {
            "Content-Type": "application/json",
            "Accept"    :   "application,json",
            "Authorization" : 'Bearer'+ accesstoken,
        },
    }).then(function (response) {
        return (response.json());
    }).then(result1 => this.setState({
        id: result1
    }));

        
    }

    render() {
        var image ;
        var name;
        var type ;
        var timings;       
         var area ;
         var cuisine; 
         var likename;   var Holder = [];
        for (var i = 0; i < this.state.id.length; i++) {
            
            for(var j=0;j < this.state.id[i]._2.length;j++) {
                Holder.push(
                (
                    <LikesHoverResult image ={this.state.id[i]._2[j].img}
                name ={this.state.id[i]._2[j].name}
                type ={this.state.id[i]._2[j].type}
                timings ={this.state.id[i]._2[j].timings}
                area ={this.state.id[i]._2[j].area}
                cuisine ={this.state.id[i]._2[j].cuisine}></LikesHoverResult>));
               
            }
        } 
        return (  
 
<div style={divStyle}>
<h2>Suggested Restaurants</h2><br />
<div class="container">
<div class="row">
  
  {Holder}
  
  
</div>
 </div>
 </div>
 
        );
    }
}
export default BasedOnLikes;