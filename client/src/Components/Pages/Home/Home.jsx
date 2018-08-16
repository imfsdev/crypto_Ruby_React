import React, { Component } from 'react';
import Register from '../Auth/Register';
import Login from '../Auth/Login';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
        <a href="/login">signup</a>
        <Register />
        <Login />
      </div>
    );
  }
}

export default Home;
