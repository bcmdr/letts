import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import UserNavDropdown from './UserNavDropdown';

class MainNav extends Component {
  render() {
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.brand}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <UserNavDropdown auth={this.props.auth} user={this.props.user} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNav;
