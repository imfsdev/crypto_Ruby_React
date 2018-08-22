import React, { Component } from 'react';
import axios from 'axios';

import { inject, observer } from 'mobx-react';
import ProfileStatsItem from './profileStatsItem';
import CoinSearch from '../../../Hoc/CoinSearch/CoinSearch';

//  for each coin, create a dropdown with that id being the symbol
// on click set state to that id
// make it pick a random color from preselected ones on creation
//  make scrollable
@inject('authStore')
@observer
class ProfileStats extends Component {
  state = {};
  componentDidMount() {
    this.props.authStore.getUserCryptocurrencies();
  }

  // for each one, make an api call to get the price and then return a div with the name, price and percent

  render() {
    const { authStore } = this.props;

    return (
      <div className="profilestats box">
        <h1 className="profilestats-title">Your portfolio: $999,999</h1>
        <div className="profilestats-subtitle">Add a coin</div>
        <CoinSearch />
        <div>
          {authStore.cryptocurrenciesLoading ? (
            <div />
          ) : (
            authStore.userCryptocurrencies.map(item => (
              <ProfileStatsItem
                name={item.name}
                price={item.quotes.USD.price}
                percent={item.quotes.USD.percent_change_24h}
                key={item.name}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStats;
