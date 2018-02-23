import React from 'react';
import Header from './Header';
import Footer from './Footer';

import LoginForm from './LoginForm';

class AppLoginForm extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <LoginForm/>
           
           
             </div>
        );
    }
}

export default AppLoginForm;