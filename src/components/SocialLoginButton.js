import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SocialLoginButton extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.auth.login(this.props.provider);
  }
  render() {
    let name = null;
    switch (this.props.provider) {
      case 'facebook':
        name = 'Facebook';
        break;
      case 'google':
        name = 'Google';
        break;
      default:
        name = null;
    }
    return (
      <Button block onClick={this.handleLogin}>
        <FontAwesome name={this.props.provider} /> Continue with {name}
      </Button>
    )
  }
}

export default SocialLoginButton;
