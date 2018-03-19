import React from 'react';
import './CircleEffect.css';

var divStyle = {
    width: "100%",
    height: "600px",
    backgroundColor:'black',
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
    overflow:'hidden',
 
};

class CircleEffect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            image: [],
            id:[],
        };
    }

    componentDidMount() {

        fetch ( "http://10.10.200.22:9000/restaurant/popular" ,
    {
        method: "GET" ,
        headers: {
            "Content-Type": "application/json",
            "Accept"    :   "application,json",
        },
    }).then(function (response) {
        return (response.json());
    }).then(result1 => this.setState({
        id: result1
    }));

        
    }

    render() {
        var image =[] ;
        var name= [];
        var type = [];
        var timings =[];        var area = [];
        for (var i = 0; i < this.state.id.length; i++) {
            console.log(this.state.id);
            
            image[i]=this.state.id[i].img;
            name[i]= this.state.id[i].name;
            type[i]=this.state.id[i].type;
            timings[i]=this.state.id[i].timings;
            area[i]=this.state.id[i].area;
        }
        return (  
 
<div style={divStyle}>
<div class="mytext"> POPULAR RESTAURANTS:</div><br />
<div class="container">
<div class="row">
  
  <div class="col-sm-3">
 
    
    <div class="ih-item circle effect16 left_to_right"><a href="#">
        <div class="img"><img src={image[0]} alt="img"></img></div>
        <div class="info">
          <h3>{name[0]}</h3>
          <p>{type[0]}</p>
          <p>{timings[0]}</p>
          <p>{area[0]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect16 right_to_left"><a href="#">
        <div class="img"><img src={image[1]} alt="img"></img></div>
        <div class="info">
          <h3>{name[1]}</h3>
          <p>{type[1]}</p>
          <p>{timings[1]}</p>
          <p>{area[1]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle effect16 left_to_right"><a href="#">
        <div class="img"><img src={image[2]} alt="img"></img></div>
        <div class="info">
          <h3>{name[2]}</h3>
          <p>{type[2]}</p>
          <p>{timings[2]}</p>
          <p>{area[2]}</p>
        </div></a></div>
  
 
  </div>
  
  <div class="col-sm-3">
 
   
    <div class="ih-item circle colored effect16 right_to_left"><a href="#">
        <div class="img"><img src={image[3]} alt="img"></img></div>
        <div class="info">
          <h3>{name[3]}</h3>
          <p>{type[3]}</p>
          <p>{timings[3]}</p>
          <p>{area[3]}</p>
        </div></a></div>
   
 
  </div>
  
</div>
<div class="row">
  <div class="col-sm-3" >
 
    
    <div class="ih-item circle effect16 left_to_right"><a href="#">
        <div class="img"><img src= {image[4]} alt="img"></img></div>
        <div class="info">
          <h3>{name[4]}</h3>
          <p>{type[4]}</p>
          <p>{timings[4]}</p>
          <p>{area[4]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle effect16 right_to_left"><a href="#">
        <div class="img"><img src={image[5]} alt="img"></img></div>
        <div class="info">
          <h3>{name[5]}</h3>
          <p>{type[5]}</p>
          <p>{timings[5]}</p>
          <p>{area[5]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle effect16 left_to_right"><a href="#">
        <div class="img"><img src={image[6]} alt="img"></img></div>
        <div class="info">
          <h3>{name[6]}</h3>
          <p>{type[6]}</p>
          <p>{timings[6]}</p>
          <p>{area[6]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle effect16 right_to_left"><a href="#">
        <div class="img"><img src={image[7]} alt="img"></img></div>
        <div class="info">
          <h3>{name[7]}</h3>
          <p>{type[7]}</p>
          <p>{timings[7]}</p>
          <p>{area[7]}</p>
        </div></a></div>
  
 
  </div>
  
 
</div>
</div>
 </div>
 

 


        );
    }
}
export default CircleEffect;