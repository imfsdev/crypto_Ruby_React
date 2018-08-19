import React, { Component } from 'react';
import axios from 'axios';

export default class CurrentPricesScroller extends Component {
  state = {
    prices: {}
  };

  // fades up from the bottom
  //  add class eg (BTC) to change colors
  // shows for 3+ seconds
  // fades up to the top, repeat
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=5').then(res => {
      const prices = res.data.data;
      this.setState({
        prices
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="currentprices">
        <h1 className="title"> HELLO!!</h1>
      </div>
    );
  }
}
