import React from 'react';
import Search from './Search';
import CarouselEffect from './CarouselEffect';

class Home extends React.Component {
    render() {
        return (
            <div>
             <Search />
             <CarouselEffect />
             </div>
        );
    }
}

export default Home;