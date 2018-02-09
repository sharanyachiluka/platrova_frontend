import React from 'react';
import image1 from './image1.jpg';
import './HoverEffect.css';

class HoverEffect extends React.Component {
    render() {
        return (
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-responsive" src="image1.jpg" alt=""/>
                        <div class="overlay">
                            <h2>Effect 14</h2>
                            <p>
                                <a href="#">LINK HERE</a>
                            </p>
                        </div>
                    </div>
                </div>
                );

    }
}

export default HoverEffect;