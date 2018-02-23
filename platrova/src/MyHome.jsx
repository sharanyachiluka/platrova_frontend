import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Search from './Search';
import HoverEffect from './HoverEffect';
import HeaderAfterLog from './HeaderAfterLog';
import Footer from './Footer';


class MyHome extends React.Component{

        render(){
            return(
                <div>
                    <HeaderAfterLog/>
                   <Search/>
             <HoverEffect />
                
                
                </div>

            );
        }
}
export default MyHome;