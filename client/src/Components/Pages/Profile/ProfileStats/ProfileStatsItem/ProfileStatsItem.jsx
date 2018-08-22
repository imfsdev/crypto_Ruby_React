import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

//  css for this is inside profilestats.scss
@inject('authStore')
@observer
class ProfileStatsItem extends Component {
  removeUserCrypto = () => {
    this.props.authStore.removeUserCrypto(this.props.id);
  };
  render() {
    // TODO: add a link to some kind of info on the current coin(?)
    return (
      <div id={this.props.id} className="box is-fullwidth profilestats-item">
        <div className="profilestats-item-close">
          <button onClick={this.removeUserCrypto} className="fas fa-times-circle" />
        </div>
        <div className="profilestats-body">
          <p>
            <a href={`https://coinmarketcap.com/currencies/${this.props.name}`}>
              <strong>{this.props.name}</strong>
            </a>
          </p>
          <p>${this.props.price.toFixed(3)}</p>
          {Math.sign(this.props.percent) === -1 ? (
            <p style={{ color: '#ff4d6a' }}>
              {this.props.percent}%{' '}
              <i style={{ color: '#ff4d6a' }} className="fas fa-level-down-alt" />
            </p>
          ) : (
            <p style={{ color: '#30e074' }}>
              {this.props.percent}%{' '}
              <i style={{ color: '#30e074' }} className="fas fa-level-up-alt" />
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatsItem;
