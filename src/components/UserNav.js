import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

import auth from '../auth'

class UserNav extends Component {
  handleLogin() {
    auth.login();
  }
  handleLogout() {
    auth.logout();
  }
  render() {
    let content = !this.props.user ? (
        <NavItem  eventKey={1} href="#" onSelect={this.handleLogin}>
          <Button className="fb-login-btn" block>
            Log in with Facebook
          </Button>
        </NavItem>
    ) : (
        <NavDropdown eventKey={1} title={this.props.user.displayName}>
          <MenuItem eventKey={1.1} onSelect={this.handleLogout}>
            Log Out
          </MenuItem>
        </NavDropdown>
    )
    return (
      <Nav pullRight>
        {content}
      </Nav>
    )
  }
}

export default UserNav;
