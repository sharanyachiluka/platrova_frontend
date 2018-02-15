import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(

<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
