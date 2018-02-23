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
import MyHome from './MyHome';
import HeaderAfterLog from './HeaderAfterLog';
import AppLoginForm from './AppLoginForm';
import AppSignUpForm from './AppSignUpForm';


class Routes extends React.Component {
    render() {
        return(
            
         <div>
                
                    
           <div>  
           
                <Route  path="/"  exact component={Home} />
            
                <Route  path="/signup"  exact component={AppSignUpForm} />
                <Route  path="/login"    exact component={AppLoginForm} />

                <Route path="/createres" exact component={Client} />
          
          </div>
            
         
            <Route path="/myhome" exact component={MyHome} />
            <Footer/>
           
           
         </div>   
            
        );
    }
}

export default Routes;