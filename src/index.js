// src/index.js — Required for Build

import React from 'react';
import ReactDOM from 'react-dom';

//import C from './constants.js';
//import auth from './auth.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
