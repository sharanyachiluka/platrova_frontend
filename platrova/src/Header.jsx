import React from 'react';
import './Header.css';
import {BrowserRouter,Router,Link} from 'react-router-dom';


class Header extends React.Component {
    render () {
        return (

             <div className="btn-group" >
                <Link to='/signup'> <button >SIGN UP</button></ Link>
                <Link to='/login'> <button >LOGIN</button></Link>    
                
            </div>
            
        );
    }
}

export default Header;