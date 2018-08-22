import React, { Component } from 'react';

class ProfileStatsItem extends Component {
  render() {
    return (
      <div className="box is-fullwidth">
        <div className="profilestats-body">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>{this.props.price}</p>
          <p style={{ color: '#4ccc68' }}>{this.props.percent}</p>
        </div>
      </div>
    );
  }
}

export default ProfileStatsItem;
