import React, { Component } from 'react';
import makeAnimated from 'react-select/lib/animated';
import { inject, observer } from 'mobx-react';
import Select from 'react-select';
import axios from 'axios';
import authStore from '../../../stores/authStore';

// TODO: if the user has a coin already listed, take it out of the search and then add it back in if they don't? maybe useless

//  set up a function to make a post request
//  loading spinner until successful
//  remove coins from the search when done
@inject('authStore')
@observer
class CoinSearch extends Component {
  state = {
    selectedOptions: [],
    options: []
  };
  componentDidMount() {
    axios.get('/api/cryptocurrencies').then(res => {
      const options = res.data.map(coin => ({
        value: coin.id,
        label: coin.name,
        api_id: coin.api_id
      }));
      this.setState({
        options
      });
    });
  }

  handleChange = selectedOptions => {
    console.log(selectedOptions);
    this.setState({ selectedOptions });
  };
  handleSubmit = () => {
    authStore.addUserCryptocurrencies({ coins: this.state.selectedOptions });

    this.setState({ selectedOptions: [] });
  };
  render() {
    const { selectedOptions, options } = this.state;
    // eslint-disable-next-line
    const { authStore} = this.props;
    return (
      <div className="coinsearch">
        <Select
          className="coinsearch-search"
          value={selectedOptions}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={options}
        />
        <button
          onClick={this.handleSubmit}
          className={`button is-info coinsearch-button ${
            authStore.cryptocurrenciesLoading ? 'is-loading' : ''
          }`}
        >
          {`Add coin${selectedOptions.length > 1 ? 's' : ''} `}
        </button>
      </div>
    );
  }
}

export default CoinSearch;
