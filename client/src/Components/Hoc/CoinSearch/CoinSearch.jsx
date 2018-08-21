import React, { Component } from 'react';
import makeAnimated from 'react-select/lib/animated';
import Select from 'react-select';
import axios from 'axios';

//  set up a function to make a post request
//  loading spinner until successful
//  remove coins from the search when done
class CoinSearch extends Component {
  state = {
    selectedOptions: [],
    options: []
  };
  componentDidMount() {
    axios.get('/api/cryptocurrencies').then(res => {
      const options = res.data.map(coin => ({
        value: coin.id,
        label: coin.name
      }));
      // console.log(options);
      this.setState({
        options
      });
    });
  }

  handleChange = selectedOptions => {
    console.log(selectedOptions);
    this.setState({ selectedOptions });
    // console.log(`Option selected:`, selectedOptions);
  };
  handleSubmit = () => {
    axios.post('/auth/user_cryptocurrencies', { coins: this.state.selectedOptions }).then(res => {
      console.log(res);
    });
  };
  render() {
    const { selectedOptions } = this.state;
    return (
      <div className="coinsearch">
        <Select
          className="coinsearch-search"
          value={selectedOptions}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={this.state.options}
        />
        <button onClick={this.handleSubmit} className="button is-info coinsearch-button">
          {`Add coin${this.state.selectedOptions.length > 1 ? 's' : ''} `}
        </button>
      </div>
    );
  }
}

export default CoinSearch;
