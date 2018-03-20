import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Search from './Search';

import HeaderAfterLog from './HeaderAfterLog';
import FooterAfterLog from './FooterAfterLog';
import CircleEffect from "./CircleEffect";
import BasedOnLikes from "./BasedOnLikes";


class MyHome extends React.Component{

        render(){
            return(
                <div>
                    <HeaderAfterLog/>
                   <Search/>
            <BasedOnLikes/>
                <FooterAfterLog/>
                
                </div>

            );
        }
}
export default MyHome;