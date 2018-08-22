import React, { Component } from 'react';

//  css for this is inside profilestats.scss
class ProfileStatsItem extends Component {
  render() {
    // TODO: add a link to some kind of info on the current coin(?)
    return (
      <div className="box is-fullwidth profilestats-item">
        <div className="profilestats-item-close">
          <i className="fas fa-times-circle" />
        </div>
        <div className="profilestats-body">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>${this.props.price.toFixed(2)}</p>
          <p style={{ color: '#4ccc68' }}>{this.props.percent}%</p>
        </div>
      </div>
    );
  }
}

export default ProfileStatsItem;
