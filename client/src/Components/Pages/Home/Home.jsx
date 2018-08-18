import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesJSON from './particles.json';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';

// eslint-disable-next-line

class Home extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <Particles
          className="particles"
          id="particles"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 5
                }
              }
            }
          }}
          style={{
            width: '100%',
            background: 'rgb(53,53,53)'
          }}
        />
        <h1>Home!</h1>
        <a href="/login">signup</a>
      </ReactAux>
    );
  }
}

export default Home;
