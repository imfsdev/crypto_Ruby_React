import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import HomeParticles from './HomeParticles';

// eslint-disable-next-line

class Home extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <HomeParticles />
        <h1>Home!</h1>
        <a href="/login">signup</a>
      </ReactAux>
    );
  }
}

export default Home;
