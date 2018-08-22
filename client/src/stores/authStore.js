import { observable, action } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// import * as R from 'ramda';

import setAuthToken from '../utils/setAuthToken';

// https://api.coinmarketcap.com/v1/ticker/bitcoin/
class AuthStore {
  @observable
  user = {};
  @observable
  cryptocurrencies = [];
  @observable
  cryptocurrenciesLoading = false;

  @action
  setUser = decoded => {
    this.user = decoded;
  };

  @action
  getUser = () => {
    axios
      .post('/auth/current_user')
      .then(res => {
        this.user.name = res.data.name;
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  getUserCryptocurrencies = () => {
    this.cryptocurrenciesLoading = true;
    axios.get('/auth/user_cryptocurrencies').then(res => {
      const { cryptocurrencies } = res.data;
      this.cryptocurrencies = cryptocurrencies;
      this.getUserCryptoInfo();
    });
  };

  @action
  addUserCryptocurrencies = coins => {
    this.cryptocurrenciesLoading = true;
    axios.post('/auth/user_cryptocurrencies', coins).then(res => {
      this.cryptocurrencies = res.data.cryptocurrencies;
      this.cryptocurrenciesLoading = false;
      // TODO: fix this because I know it can be done better
      //  it kind of works but need some way to make it impossible to add one if it already exists
      if (res.data.cryptocurrencies.length !== this.cryptocurrencies.length) {
        this.addSingleCryptocurrencies(
          res.data.cryptocurrencies.slice(res.data.cryptocurrencies.length - coins.coins.length)
        );
      }
    });
  };

  @action
  addSingleCryptocurrencies = coins => {
    coins.map(e =>
      fetch(`https://api.coinmarketcap.com/v2/ticker/${e.api_id}/`)
        .then(item => item.json())
        .then(json => {
          this.userCryptocurrencies.push(json.data);
          this.cryptocurrenciesLoading = false;
        })
    );
  };

  @observable
  userCryptocurrencies = [];

  @action
  getUserCryptoInfo = () => {
    this.userCryptocurrencies = [];
    this.cryptocurrencies.map(e =>
      fetch(`https://api.coinmarketcap.com/v2/ticker/${e.api_id}/`)
        .then(item => item.json())
        .then(json => {
          this.userCryptocurrencies.push(json.data);
          this.cryptocurrenciesLoading = false;
        })
    );
  };
  // TODO: test if this works properly
  @action
  logoutUser = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    this.user = {};
  };

  @action
  loginUser = userData => {
    axios
      .post('/auth/login', userData)
      .then(res => {
        this.user = jwtDecode(res.data.access_token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  registerUser = userData => {
    axios.post('/auth/register', userData).then(res => {
      localStorage.setItem('jwtToken', res.data.access_token);
    });
  };

  // TODO: delete/use this?
  // @action
  // findUserProfile = () => {
  //   setTimeout(() => {
  //     axios
  //       .get('/auth/user_cryptocurrencies', this.user.id)
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, 3000);
  // };
}

export default new AuthStore();
