import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

import C from '../constants';

import UserNav from './UserNav'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: C.FIREBASE.auth().currentUser
    };
  }

  authListener() {
    C.FIREBASE.auth().onAuthStateChanged((user) => {
      this.setState({
        user: C.FIREBASE.auth().currentUser
      })
    });
  }

  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Letts</a>
            </Navbar.Brand>
          </Navbar.Header>
          <UserNav user={this.state.user} />
        </Navbar>
      </div>
    );
  }
}

export default App;
