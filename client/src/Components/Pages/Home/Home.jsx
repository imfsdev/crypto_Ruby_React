import React, { Component } from 'react';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Navbar from '../../Hoc/Navbar';
import ReactAux from '../../Hoc/ReactAux';

class Home extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <h1>Home!</h1>
        <a href="/login">signup</a>
        <Register />
        <Login />
      </ReactAux>
    );
  }
}

export default Home;
