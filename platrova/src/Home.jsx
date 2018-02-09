import React from 'react';
import Backimg from './Backimg';
import CarouselEffect from './CarouselEffect';
import HoverEffect from './HoverEffect';

class Home extends React.Component {
    render() {
        return (
            <div>
             <Backimg />
             <HoverEffect />
             </div>
        );
    }
}

export default Home;