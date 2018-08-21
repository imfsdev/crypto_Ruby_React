import React, { Component } from 'react';
import makeAnimated from 'react-select/lib/animated';
import Select from 'react-select';
import axios from 'axios';

//  set up a function to make a post request
//  loading spinner until successful
//  remove coins from the search when done
class CoinSearch extends Component {
  state = {
    selectedOption: null,
    options: []
  };
  componentDidMount() {
    axios.get('/api/cryptocurrencies').then(res => {
      const options = res.data.map(coin => ({
        value: coin.id,
        label: coin.name
      }));
      console.log(options);
      this.setState({
        options
      });
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="coinsearch">
        <Select
          className="coinsearch-search"
          value={selectedOption}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={this.state.options}
        />
        <button className="button is-info coinsearch-button">Add coins</button>
      </div>
    );
  }
}

export default CoinSearch;
