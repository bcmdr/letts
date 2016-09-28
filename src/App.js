import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import './constants.js';
// import auth from './auth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '@bcmdr'
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Letts</h2>
        </div>
        <p className="App-intro">
          {this.state.username} got started.
        </p>
      </div>
    );
  }
}

export default App;
