import React from 'react';
import './Header.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { ButtonToolbar, Button, Nav, Navbar, NavItem, FormGroup } from 'react-bootstrap';


class HeaderClient extends React.Component {
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
                            <Button bsStyle="danger"><Link to='/createres' class="active">Create Restaurant</Link></Button>
                                <Button bsStyle="danger"><Link to='/showres' class="active">Show Restaurant</Link></Button>
                                <Button bsStyle="danger"><Link to='/myprofile' class="active">MyProfile</Link></Button>
                                <Button bsStyle="danger"><Link to='/logout' class="active">Logout</Link></Button>
                            </ButtonToolbar>
                        </Nav>
                    </Navbar.Form>
              
                </div>
            </div>
            

        );
    }
}

export default HeaderClient;