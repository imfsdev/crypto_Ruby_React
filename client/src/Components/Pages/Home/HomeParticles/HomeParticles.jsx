import React from 'react';
import Particles from 'react-particles-js';

const HomeParticles = () => (
  <Particles
    className="particles"
    id="particles"
    params={{
      particles: {
        number: {
          // TODO: change this to window.innerWidth / 24
          value: 0,
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
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'bubble'
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
  />
);

export default HomeParticles;
