import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Geolocation from "react-geolocation";

ReactDOM.render(

<BrowserRouter>
<Routes />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
