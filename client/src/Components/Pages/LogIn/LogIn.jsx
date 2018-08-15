import React, { Component } from 'react';
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import jwtDecode from 'jwt-decode';

@inject('authStore')
@observer
class LogIn extends Component {
  componentDidMount() {
    this.props.authStore.loginUser({
      user: {
        email: 'hello@world.com',
        password: 'password'
      }
    });
  }

  render() {
    return (
      <div>
        <p>login</p>
      </div>
    );
  }
}

export default LogIn;
