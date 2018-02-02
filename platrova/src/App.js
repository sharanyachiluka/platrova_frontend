import React, { Component } from "react";
import { BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignUp from './SignUp';


class App extends Component {
  render() {
    return (
      <div>
            <Header/>
              <Route  path="/signup" exact component={SignUp} />
              <Route  path="/login" exact component={LoginForm} />
             <Footer/>
       </div>
    );
  }
}

export default App;
