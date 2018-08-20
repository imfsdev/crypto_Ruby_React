import React, { Component } from 'react';
import axios from 'axios';

export default class CurrentPricesScroller extends Component {
  state = {
    prices: {},
    currentCoin: '',
    currentPrice: ''
  };

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=10').then(res => {
      // orders the prices properly from 0-4
      const prices = Object.values(res.data.data);
      this.setState({
        prices
      });

      // console.log(this.state);

      const len = this.state.prices.length;
      const delay = 2500;
      // loops through each item in prices, sets the name/price state every 2.5 seconds to the next one
      const findCurrentPrices = () => {
        for (let i = 0; i < len; i += 1) {
          setTimeout(() => {
            this.setState({
              currentCoin: prices[i].name,
              currentPrice: prices[i].quotes.USD.price.toFixed(2)
            });
          }, i * delay);
        }
      };
      // runs the function right away, then runs it again when the delay*len is up eg(2500ms x 5)
      findCurrentPrices();
      setInterval(() => {
        findCurrentPrices();
      }, delay * len);
    });
  }

  render() {
    return (
      <div className="currentprices">
        <h1
          // adds the animation when the api call has ended, so things change at the right times.
          className={`title currentprices-text ${
            this.state.currentCoin !== '' ? 'currentprices-anim' : ''
          }`}
        >
          {this.state.currentCoin}: ${this.state.currentPrice}
        </h1>
      </div>
    );
  }
}
