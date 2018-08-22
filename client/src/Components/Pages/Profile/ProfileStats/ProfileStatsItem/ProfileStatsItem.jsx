import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

//  css for this is inside profilestats.scss
@inject('authStore')
@observer
class ProfileStatsItem extends Component {
  removeUserCrypto = () => {
    this.props.authStore.removeUserCrypto(this.props.id);
    console.log(this.props);
  };
  render() {
    const { authStore } = this.props;

    // TODO: add a link to some kind of info on the current coin(?)
    return (
      <div id={this.props.id} className="box is-fullwidth profilestats-item">
        <div className="profilestats-item-close">
          <button onClick={this.removeUserCrypto} className="fas fa-times-circle" />
        </div>
        <div className="profilestats-body">
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>${this.props.price.toFixed(3)}</p>
          <p style={{ color: '#4ccc68' }}>{this.props.percent}%</p>
        </div>
      </div>
    );
  }
}

export default ProfileStatsItem;
