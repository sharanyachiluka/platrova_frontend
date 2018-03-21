import React from 'react';
import './CircleEffect.css';

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
            image: [],
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
        var image =[[],[]];
        var name= [[],[]];
        var type = [[],[]];
        var timings =[[],[]];       
         var area = [[],[]];
         var cuisine = [[],[]];
         var likename=[];
        for (var i = 0; i < this.state.id.length; i++) {
              likename[i]=this.state.id[i]._1;
            for(var j=0;j < this.state.id[i]._2.length;j++) {
                image[[i],[j]] =this.state.id[i]._2[j].img;
                name[[i],[j]] =this.state.id[i]._2[j].name;
                type[[i],[j]] =this.state.id[i]._2[j].type;
                timings[[i],[j]] =this.state.id[i]._2[j].timings;
                area[[i],[j]] =this.state.id[i]._2[j].area;
                cuisine[[i],[j]] =this.state.id[i]._2[j].cuisine;
                console.log(image[[i],[j]]);
            }
        } console.log(this.state.id);
        return (  
 
<div style={divStyle}>
<h2>Suggested Restaurants</h2><br />
<div class="container">
<div class="row">
  
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 left_to_right"><a href="#">
        <div class="img"><img src={image[[0],[0]]} alt="img"></img></div>
        <div class="info">
          <h3>{name[[0],[0]]}</h3>
          <p>{type[[0],[0]]}</p>
          <p>{cuisine[[0],[0]]}</p>
          <p>{area[[0],[0]]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 right_to_left"><a href="#">
        <div class="img"><img src={image[[0],[1]]} alt="img"></img></div>
        <div class="info">
        <h3>{name[[0],[1]]}</h3>
          <p>{type[[0],[1]]}</p>
          <p>{cuisine[[0],[1]]}</p>
          <p>{area[[0],[1]]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 left_to_right"><a href="#">
        <div class="img"><img src={image[[0],[2]]} alt="img"></img></div>
        <div class="info">
        <h3>{name[[0],[2]]}</h3>
          <p>{type[[0],[2]]}</p>
          <p>{cuisine[[0],[2]]}</p>
          <p>{area[[0],[2]]}</p>
        </div></a></div>
  
 
  </div>
  
  <div class="col-sm-3">
 
   
    <div class="ih-item circle colored effect3 right_to_left"><a href="#">
        <div class="img"><img src={image[[0],[3]]} alt="img"></img></div>
        <div class="info">
        <h3>{name[[0],[3]]}</h3>
          <p>{type[[0],[3]]}</p>
          <p>{cuisine[[0],[3]]}</p>
          <p>{area[[0],[3]]}</p>
        </div></a></div>
   
 
  </div>
  
</div>
<div class="row">
 
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 right_to_left"><a href="#">
        <div class="img"><img src={image[[2],[0]]} alt="img"></img></div>
        <div class="info">
        <h3>{name[[2],[0]]}</h3>
          <p>{type[[2],[0]]}</p>
          <p>{cuisine[[2],[0]]}</p>
          <p>{area[[2],[0]]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 left_to_right"><a href="#">
        <div class="img"><img src={image[[1],[1]]} alt="img"></img></div>
        <div class="info">
          <h3>{name[[1],[1]]}</h3>
          <p>{type[[1],[1]]}</p>
          <p>{timings[[1],[1]]}</p>
          <p>{area[[1],[1]]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3">
 
    
    <div class="ih-item circle colored effect3 right_to_left"><a href="#">
        <div class="img"><img src={image[[1],[2]]} alt="img"></img></div>
        <div class="info">
          <h3>{name[[1],[2]]}</h3>
          <p>{type[[1],[2]]}</p>
          <p>{timings[[1],[2]]}</p>
          <p>{area[[1],[2]]}</p>
        </div></a></div>
  
 
  </div>
  <div class="col-sm-3" >
 
    
 <div class="ih-item circle colored effect3 left_to_right"><a href="#">
     <div class="img"><img src= {image[[1],[3]]} alt="img"></img></div>
     <div class="info">
     <h3>{name[[1],[3]]}</h3>
       <p>{type[[1],[3]]}</p>
       <p>{cuisine[[1],[3]]}</p>
       <p>{area[[1],[3]]}</p>
     </div></a></div>


</div>
  
 
</div>
</div>
 </div>
 
        );
    }
}
export default BasedOnLikes;