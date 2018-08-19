import React, { Component } from 'react';
import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import HomeParticles from './HomeParticles/HomeParticles';
import CardItem from './CardItem/CardItem';

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
              <button className="home-scroll">
                <i className="fas fa-chevron-down" />
              </button>
              <div className="columns home-cards">
                <CardItem
                  subtitle="Item 1"
                  title="Crypto"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci nisl, tristique sit amet sagittis et, convallis quis magna. Proin tellus est, viverra sit amet bibendum sed, elementum non eros."
                />
                <CardItem
                  subtitle="Item 1"
                  title="Crypto"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci nisl, tristique sit amet sagittis et, convallis quis magna. Proin tellus est, viverra sit amet bibendum sed, elementum non eros."
                />
                <CardItem
                  subtitle="Item 1"
                  title="Crypto"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci nisl, tristique sit amet sagittis et, convallis quis magna. Proin tellus est, viverra sit amet bibendum sed, elementum non eros."
                />
              </div>
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}

export default Home;
