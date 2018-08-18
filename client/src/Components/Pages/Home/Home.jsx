import React, { Component } from 'react';
import Particles from 'react-particles-js';
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
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 7
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'grab'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            retina_detect: true
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
