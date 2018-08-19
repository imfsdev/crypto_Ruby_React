import React, { Component } from 'react';
import axios from 'axios';

export default class CurrentPricesScroller extends Component {
  state = {
    prices: {},
    // eslint-disable-next-line
    currentCoin: '',
    // eslint-disable-next-line
    currentPrice: ''
  };

  // fades up from the bottom
  //  add class eg (BTC) to change colors
  // shows for 3+ seconds
  // fades up to the top, repeat
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=5').then(res => {
      // eslint-disable-next-line
      const prices = Object.values(res.data.data);
      this.setState({
        prices
      });

      // eslint-disable-next-line
      const len = (this.state.prices).length;
      const findCurrentPrices = () => {
        for (let i = 0; i < len; i += 1) {
          setTimeout(() => {
            this.setState({
              currentCoin: prices[i].name,
              currentPrice: prices[i].quotes.USD.price.toFixed(2)
            });
          }, i * 5000);
        }
      };
      findCurrentPrices();
      setInterval(() => {
        findCurrentPrices();
      }, 25000);
    });
  }

  render() {
    return (
      <div className="currentprices">
        <h1 className="title">
          {this.state.currentCoin}: ${this.state.currentPrice}
        </h1>
      </div>
    );
  }
}
