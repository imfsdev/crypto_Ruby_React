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
        <div className="container home">
          <div className="hero">
            <div className="hero-body has-text-centered">
              <h1 className="title ">TRACK THE LATEST BITCOIN PRICES</h1>
              <h1 className="subtitle">TRACK YOUR PORTFOLIO</h1>
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}

export default Home;
