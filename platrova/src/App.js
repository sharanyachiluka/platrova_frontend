import React, { Component } from "react";
import { BrowserRouter,Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          </Header>
          <BrowserRouter>
              <Route path={"Login"} component={LoginForm}/>
            
          </BrowserRouter>
          <Footer>
            </Footer>
        
      </div>
    );
  }
}

export default App;
