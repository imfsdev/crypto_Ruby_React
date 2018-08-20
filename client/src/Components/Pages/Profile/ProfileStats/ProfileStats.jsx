import React, { Component } from 'react';

//  for each coin, create a dropdown with that id being the symbol
// on click set state to that id

export default class ProfileStats extends Component {
  render() {
    return (
      <div className="profilestats box">
        <h1 className="profilestats-title">Your portfolio: $999,999</h1>
        <div className="columns is-mobile profilestats-item is-multiline">
          <div className="column is-half">
            <p>hi</p>
          </div>
          <div className="column is-half">2</div>
          <div className="column is-half">
            <p>hi</p>
          </div>
          <div className="column is-half">2</div>
          <div className="column is-half">
            <p>hi</p>
          </div>
          <div className="column is-half">2</div>
        </div>
      </div>
    );
  }
}
