import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import CurrentPricesScroller from '../../Hoc/CurrentPricesScroller/CurrentPricesScroller';
import HomeParticles from './HomeParticles/HomeParticles';
import CardItem from './CardItem/CardItem';

@inject('authStore')
@observer
class Home extends Component {
  render() {
    const { authStore } = this.props;

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
              <CurrentPricesScroller />
              <div className="home-signup">
                <div className="primarybutton button is-medium">Sign Up</div>
                <p className="subtitle is-6 home-signup-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}

export default Home;
