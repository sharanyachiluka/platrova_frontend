import React from 'react';
import {Carousel,Image} from 'react-bootstrap';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';


class CarouselEffect extends React.Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <Image width={1500} height={10}  src="image1.jpg" responsive/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1500} height={60} src="image2.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={5500} height={60}  src="image3.jpg" />
              
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default CarouselEffect;