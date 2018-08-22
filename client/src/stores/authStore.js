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
    axios.get('/api/user_cryptocurrencies').then(res => {
      this.getUserCryptoInfo(res.data.cryptocurrencies);
    });
  };

  @action
  addUserCryptocurrencies = coins => {
    this.cryptocurrenciesLoading = true;
    axios
      .post('/api/user_cryptocurrencies', coins)
      .then(res => {
        // sends all user cryptocurrencies to the function that will find info on each one
        this.getUserCryptoInfo(res.data.cryptocurrencies);
      })
      .catch(err => {
        this.cryptocurrenciesLoading = false;
      });
  };

  // @action
  // addSingleCryptocurrencies = coins => {
  //   this.userCryptocurrencies = [];
  //   coins.map(e =>
  //     fetch(`https://api.coinmarketcap.com/v2/ticker/${e.api_id}/`)
  //       .then(item => item.json())
  //       .then(json => {
  //         this.userCryptocurrencies.push(json.data);
  //       })
  //   );
  // };

  @observable
  userCryptocurrencies = [];

  @action
  getUserCryptoInfo = coins => {
    this.cryptocurrenciesLoading = true;
    this.userCryptocurrencies = [];
    const finished = coins.map(coin =>
      fetch(`https://api.coinmarketcap.com/v2/ticker/${coin.api_id}/`)
        .then(item => item.json())
        .then(json => this.userCryptocurrencies.push(json.data))
        .catch(err => {
          this.cryptocurrenciesLoading = false;
        })
    );
    console.log(finished);
    Promise.all(finished).then(() => {
      this.cryptocurrenciesLoading = false;
    });
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
