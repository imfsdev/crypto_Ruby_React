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

      console.log(this.state);
      // eslint-disable-next-line
      const len = (this.state.prices).length;
      console.log(len);
      console.log(this.state.prices[0]);

      for (let i = 0; i < len; i += 1) {
        setTimeout(() => {
          this.setState({
            currentPrice: prices[i].name,
            currentCoin: prices[i].quotes.USD.price
          });
        }, i * 5000);
      }
    });
    // every 3 seconds replace the currentCoin with 1 of the prices, going through 1 by 1
    //  go back to the first one if the current one is the last one.
    // const size = Object.keys(this.state.prices).length;
    // setInterval(() => {
    // console.log('fuck');
    // }, 3000);
  }
  render() {
    return (
      <div className="currentprices">
        <h1 className="title">
          {this.state.currentCoin}: {this.state.currentPrice}
        </h1>
      </div>
    );
  }
}
