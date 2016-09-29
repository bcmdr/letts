import React, { Component } from 'react';

import C from '../constants';

import User from './User'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      User: C.FIREBASE.auth().currentUser
    };
  }

  authListener() {
    C.FIREBASE.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          User: {
            displayName: user.displayName
          }
        });
      } else {
        this.setState({
          User: null
        })
      }
    });
  }

  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Letts</h2>
          <User user={this.state.User}/>
        </div>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
