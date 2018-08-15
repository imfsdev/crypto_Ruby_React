import React, { Component } from 'react';
import axios from 'axios';

export default class LogIn extends Component {
  componentDidMount() {
    axios
      .post('/api/users/sign_in', { user: { email: 'hello@world.com', password: 'password' } })
      .then(res => {
        console.log(res);
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
