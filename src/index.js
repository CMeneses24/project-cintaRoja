import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
import './assets/vendor/animsition/css/animsition.min.css';
import './assets/vendor/select2/select2.min.css';
import './assets/vendor/daterangepicker/daterangepicker.css';
import './assets/css/main.css';
import './assets/css/util.css';
import './assets/css/dash.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
