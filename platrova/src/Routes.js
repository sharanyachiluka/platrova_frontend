import React from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import Home from './Home';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
//import ClientHomepage from './ClientHomepage';
import Client from './Client';


class Routes extends React.Component {
    render() {
        return(
            
            <div>
             <Header />
            <Route  path="/"  exact component={Home} />
            <Route  path="/signup"  exact component={SignUp} />
            <Route  path="/login"    exact component={LoginForm} />
            <Route path="/createres" exact component={Client} />
            <Footer />
            </div>
            
            
        );
    }
}

export default Routes;