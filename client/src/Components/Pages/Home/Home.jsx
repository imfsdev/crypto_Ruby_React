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
        {window.innerWidth < 10900 ? (
          <Particles
            className="particles"
            id="particles"
            params={{
              particles: {
                number: {
                  value: window.innerWidth / 24,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#fafafa',
                  opacity: 0.5,
                  width: 1
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 1,
                    color: '#fafafa'
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
                  resize: true,
                  onresize: {
                    enable: true,
                    density_auto: true,
                    density_area: 400
                  }
                },
                modes: {
                  grab: {
                    distance: 200,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  }
                }
              },
              retina_detect: true
            }}
            style={{
              background: 'rgb(53,53,53)'
            }}
          />
        ) : (
          <div className="home-mobile-background" />
        )}
        <h1>Home!</h1>
        <a href="/login">signup</a>
      </ReactAux>
    );
  }
}

export default Home;
