import React from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import Home from './Home';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import SearchResult from './SearchResult';
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
import EditUserProfile from './EditUserProfile';
import EditClientProfile from './EditClientProfile';
import NearByResult from './NearByResult';
import BeAPartner from './BeAPartner';
import MenuTry from './MenuTry';

class Routes extends React.Component {
    render() {
        return(
            
         <div>
          <Route  path="/"  exact component={Home} />
            <Route  path="/signup"  exact component={AppSignUpForm} />
                <Route  path="/login"    exact component={AppLoginForm} />
                <Route path="/createres" exact component={Client} />
              <Route exact path="/myhome"  component={MyHome} />
              <Route exact path="/beapartner" component={BeAPartner}/>
            <Route path="/userprofile" exact component={UserProfile}/>
            <Route path="/editprofile" exact component={EditUserProfile}/>
            <Route path="/clientprofile" exact component={ClientProfile}/>
            <Route path="/editclientprofile" exact component={EditClientProfile}/>
            <Route path="/restaurants" exact component={GetAllRest}/>
            <Route path="/editrestaurant/:Id" exact component={EditRest}/>
            <Route path="/updatepassword" exact component={UpdatePassword}/>
            <Route path="/forgotpassword" exact component={ForgotPassword}/>
            <Route path="/forgotpassword/:token" exact component={ForgotPassword1}/>
            <Route path="/searchresult/:search" exact component={SearchResult}/>
            <Route path="/nearbyresult" exact component={NearByResult}/>
            <Route path="/menutry" exact component={MenuTry}/>
       </div>   
            
        );
    }
}

export default Routes;
