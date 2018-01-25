import React from 'react';
import ReactDOM from 'react-dom';
import './SignUp.css';
import SignUp from './SignUp';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUp />, document.getElementById('root'));
registerServiceWorker();
