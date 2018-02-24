import React from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import Home from './Home';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
//import UserProfile from './ClientHomepage';
import Client from './Client';
import MyHome from './MyHome';
import HeaderAfterLog from './HeaderAfterLog';
import AppLoginForm from './AppLoginForm';
import AppSignUpForm from './AppSignUpForm';
import UserProfile from './UserProfile';


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
            
         
            <Route exact path="/myhome"  component={MyHome} />
            <Route path="/myprofile" exact component={UserProfile}/>
            <Footer/>
           
           
         </div>   
            
        );
    }
}

export default Routes;