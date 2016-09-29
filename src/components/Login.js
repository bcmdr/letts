import React, { Component } from 'react';
import auth from '../auth';

class Login extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <button onClick={this.onClick}>
        Log in with Facebook
      </button>
    )
  }
  onClick() {
    auth.login();
  }

}

export default Login;
