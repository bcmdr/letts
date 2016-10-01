import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import C from '../constants';
import auth from '../auth';
import './App.css';
import MainNav from './MainNav';
import AppTopic from './AppTopic';

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
        <MainNav brand="Letts" auth={auth} user={this.state.user}/>
        <Grid>
          <Row>
            <AppTopic user={this.state.user} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
