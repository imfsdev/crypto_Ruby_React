import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import HomeParticles from './HomeParticles';

class Home extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <HomeParticles />
        <div className="home-particles-end" />
        <div className="columns">
          <div className="column">
            <p>hello</p>
          </div>
        </div>
        <a href="/login">signup</a>
      </ReactAux>
    );
  }
}

export default Home;
