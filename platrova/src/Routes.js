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
import GetAllRest from './GetAllRest';
import ClientProfile from './ClientProfile';
import UpdatePassword from './UpdatePassword';
import ForgotPassword from './ForgotPassword';
import ForgotPassword1 from './ForgotPassword1';
import EditRest from './EditRest';

class Routes extends React.Component {
    render() {
        return(
            
         <div>
          <Route  path="/"  exact component={Home} />
            <Route  path="/signup"  exact component={AppSignUpForm} />
                <Route  path="/login"    exact component={AppLoginForm} />
                <Route path="/createres" exact component={Client} />
              <Route exact path="/myhome"  component={MyHome} />
            <Route path="/userprofile" exact component={UserProfile}/>
            <Route path="/clientprofile" exact component={ClientProfile}/>
            <Route path="/restaurants" exact component={GetAllRest}/>
            <Route path="/editrestaurant/:Id" exact component={EditRest}/>
            <Route path="/updatepassword" exact component={UpdatePassword}/>
            <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/forgotpassword/:token" exact component={ForgotPassword1}/>
       </div>   
            
        );
    }
}

export default Routes;