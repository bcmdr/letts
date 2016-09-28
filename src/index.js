// src/index.js — Required for Build

import React from 'react';
import ReactDOM from 'react-dom';

import C from './constants.js';
//import auth from './auth.js';

import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

C.AUTH.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in!
  } else {
    // User is signed out!
  }
});
