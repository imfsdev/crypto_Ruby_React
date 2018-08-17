import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';

class Home extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <h1>Home!</h1>
        <a href="/login">signup</a>
      </ReactAux>
    );
  }
}

export default Home;
