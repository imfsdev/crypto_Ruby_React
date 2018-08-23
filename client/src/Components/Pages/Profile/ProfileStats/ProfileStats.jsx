import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';
import ProfileStatsItem from './ProfileStatsItem/ProfileStatsItem';
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

  // for each cryptocurrency the user has added to their profile, create a ProfileStatsItem displaying the name/price/etc
  render() {
    const { authStore } = this.props;

    return (
      <div className="profilestats box">
        <h1 className="profilestats-title">Welcome, {authStore.user.name}</h1>
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
                key={item.id}
                id={item.id}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStats;
