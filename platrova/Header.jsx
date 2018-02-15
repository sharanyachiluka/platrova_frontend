import React from 'react';
import './Header.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button, Nav, Navbar, FormGroup } from 'react-bootstrap';


class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <div id="header-sroll">
                    <Navbar.Form>
                        <Navbar.Brand>
                            <Link to='/' class="white">PLATROVA</Link>
                        </Navbar.Brand>
                        <Nav pullRight>
                            <ButtonToolbar>
                                <Button bsStyle="danger"><Link to='/login' class="active">Login</Link></Button>
                                <Button bsStyle="danger"><Link to='/signup' class="active">Signup</Link></Button>
                            </ButtonToolbar>
                        </Nav>
                    </Navbar.Form>
                </div>
            </div>

        );
    }
}

export default Header;