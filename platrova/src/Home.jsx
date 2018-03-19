import React from 'react';
import Search from './Search';
//import HoverEffect from './HoverEffect';
import Header from './Header';
import Footer from './Footer';
import CircleEffect from './CircleEffect';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                
             <Search/>
             <CircleEffect />
           <Footer/>
           
             </div>
        );
    }
}

export default Home;