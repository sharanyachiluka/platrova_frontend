import React from 'react';
import Search from './Search';
import HoverEffect from './HoverEffect';
import Header from './Header';
import Footer from './Footer';
import Geolocation from 'react-geolocation';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Geolocation/>
             <Search/>
             <HoverEffect />
           
           
             </div>
        );
    }
}

export default Home;