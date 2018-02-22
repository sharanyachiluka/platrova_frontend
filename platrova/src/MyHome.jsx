import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import HeaderAfterLog from './HeaderAfterLog';
import Footer from './Footer';


class MyHome extends React.Component{

        render(){
            return(
                <div>
                    <HeaderAfterLog/>
                    <Home/>
                <Footer/>
                </div>

            );
        }
}
export default MyHome;