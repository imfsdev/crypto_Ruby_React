import React, { Component } from 'react';

//  for each coin, create a dropdown with that id being the symbol
// on click set state to that id
// make it pick a random color from preselected ones on creation
//  make scrollable

export default class ProfileStats extends Component {
  render() {
    return (
      <div className="profilestats box">
        <h1 className="profilestats-title">Your portfolio: $999,999</h1>
        <div className="box is-fullwidth">
          <div className="profilestats-body">
            <p>
              <strong>Bitcoin</strong>
            </p>
            <p>$83827</p>
            <p style={{ color: '#4ccc68' }}>%43.84</p>
          </div>
        </div>
        <div className="box is-fullwidth">
          <div className="profilestats-body">
            <p>
              <strong>Bitcoin</strong>
            </p>
            <p>$83827</p>
            <p style={{ color: '#4ccc68' }}>%43.84</p>
          </div>
        </div>
        <div className="box is-fullwidth">
          <div className="profilestats-body">
            <p>
              <strong>Bitcoin</strong>
            </p>
            <p>$83827</p>
            <p style={{ color: '#4ccc68' }}>%43.84</p>
          </div>
        </div>
        <div className="box is-fullwidth">
          <div className="profilestats-body">
            <p>
              <strong>Bitcoin</strong>
            </p>
            <p>$83827</p>
            <p style={{ color: '#ff7777' }}>-%43.84</p>
          </div>
        </div>
        <div className="box is-fullwidth">
          <div className="profilestats-body">
            <p>
              <strong>Bitcoin</strong>
            </p>
            <p>$83827</p>
            <p style={{ color: '#ff7777' }}>-%43.84</p>
          </div>
        </div>
      </div>
    );
  }
}
