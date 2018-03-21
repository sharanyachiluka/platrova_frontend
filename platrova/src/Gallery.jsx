import React from 'react';
import './CircleEffect.css';

var divStyle = {
    width: "100%",
    height: "700px",
    backgroundColor:'black',
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
    overflow:'hidden',
    color:'white',
    fontWeight:'50px',
 
};

class Gallery extends React.Component{
    render(){
        return(

            <div style={divStyle}>
<h2> GALLERY :</h2><br />
<div class="container">
<div class="row">
  
  <div class="col-sm-4">
 
    
    <div class="ih-item square effect3 bottom_to_top">
        <div class="img"><img src="p1.png" alt="img"></img></div>
        <div class="info">
         
        </div></div>
  
 
  </div>
  <div class="col-sm-4">
 
    
    <div class="ih-item square effect3 bottom_to_top"><a href="#">
        <div class="img"><img src="p1.png" alt="img"></img></div>
        <div class="info">
          
        </div></a></div>
  
 
  </div>
  <div class="col-sm-4">
 
    
    <div class="ih-item square effect3 bottom_to_top"><a href="#">
        <div class="img"><img src="p1.png" alt="img"></img></div>
        <div class="info">
          
        </div></a></div>
  
 
  </div>
  
  
  
</div>
<div class="row">
<div class="col-sm-4">
 
   
    <div class="ih-item square effect3 bottom_to_top"><a href="#">
        <div class="img"><img src="p1.png" alt="img"></img></div>
        <div class="info">
         
        </div></a></div>
   
 
  </div>
  <div class="col-sm-4">
 
   
    <div class="ih-item square effect3 bottom_to_top"><a href="#">
        <div class="img"><img src="backgroundimg.png" alt="img"></img></div>
        <div class="info">
         
        </div></a></div>
   
 
  </div>
  <div class="col-sm-4">
 
   
    <div class="ih-item square effect3 bottom_to_top"><a href="#">
        <div class="img"><img src="p1.png" alt="img"></img></div>
        <div class="info">
         
        </div></a></div>
   
 
  </div>
   </div>
 </div>
 </div>
 

        );
    }
}
export default Gallery;