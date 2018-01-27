import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import LoginForm from './LoginForm';

ReactDOM.render(<LoginForm/>, document.getElementById('root'));
registerServiceWorker();
