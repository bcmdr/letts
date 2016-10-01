import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

import SocialLoginButton from './SocialLoginButton'

class UserNavDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.auth.logout();
  }
  render() {
    let content = !this.props.user ? (
      <NavDropdown title="Login" id="nav-login-dropdown">
        <MenuItem>
          <SocialLoginButton auth={this.props.auth} provider="facebook" />
        </MenuItem>
        <MenuItem>
          <SocialLoginButton auth={this.props.auth} provider="google" />
        </MenuItem>
      </NavDropdown>
    ) : (
      <NavDropdown
        id="nav-user-dropdown"
        title={
          <img className="avatar" src={this.props.user.photoURL} alt={this.props.user.displayName}/>
        }
      >
        <MenuItem onSelect={this.handleLogout}>
          Log Out
        </MenuItem>
      </NavDropdown>
    )
    return content;
  }
}

export default UserNavDropdown;
