import React from 'react';
import image1 from './image1.jpg';
import './HoverEffect.css';
import hoverimage from './hoverimage.jpg';

var divStyle = {
    width: "100%",
    height: "500px",
    backgroundColor:'black',
    /*backgroundImage: `url(${hoverimage})`,*/
    backgroundRepeat: 'no-repeat',
	backgroundSize:'cover',
	overflow:'hidden',
};
class HoverEffect extends React.Component {
    render() {
        return (
            <div style={divStyle}>
           <div class="mytext"> POPULAR RESTAURANTS:</div><br />
                <div class="container">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <br />
                    <div class="container">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="hovereffect">
                            <img class="img-responsive" src="image1.jpg" alt="" hspace="50" />
                            <div class="overlay">
                                <h2>Effect 13</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
          
        );

    }
}

export default HoverEffect;