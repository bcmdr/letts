import React, { Component } from 'react';
import auth from '../auth';

class Logout extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return (
      <button onClick={this.onClick}>
        Log Out
      </button>
    )
  }
  onClick() {
    auth.logout();
  }

}

export default Logout;
