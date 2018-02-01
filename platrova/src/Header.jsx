import React from 'react';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
            
            <div className="btn-group" >
  <button >HOME </button>
  <button >SIGN UP</button>
  <button >LOGIN</button>
</div>
        );
    }
}

export default Header;