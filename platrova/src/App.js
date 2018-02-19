import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Sample from './sample';

class App extends Component {
  render() {
    return (
       <div>
            
            <Home />
            
       </div>
    );
  }
}

export default App;
