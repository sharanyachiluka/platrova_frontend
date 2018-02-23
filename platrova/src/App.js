import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";


class App extends Component {
  render() {
    return (
       <div>
            
           <Home/>
            <Header/>
            <SignUp/>
            <LoginForm/>
            
       </div>
    );
  }
}

export default App;
