import React from 'react';
import Search from './Search';
import HoverEffect from './HoverEffect';

class Home extends React.Component {
    render() {
        return (
            <div>
             <Search/>
             <HoverEffect />
             </div>
        );
    }
}

export default Home;