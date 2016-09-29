import React, { Component } from 'react';

import Login from './Login';
import Logout from './Logout';

class User extends Component {
  render() {
    return !this.props.user ? (
      <div id="user-container">
        <Login />
      </div>
    ) : (
      <div id="user-container">
        <div id="user-name">{this.props.user.displayName}</div>
        <Logout />
      </div>
    );
  }

}

export default User;
