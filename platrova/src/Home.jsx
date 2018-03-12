import React from 'react';
import Search from './Search';
import HoverEffect from './HoverEffect';
import Header from './Header';
import Footer from './Footer';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                
             <Search/>
             <HoverEffect />
           <Footer/>
           
             </div>
        );
    }
}

export default Home;