import { observable, action } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
// import * as R from 'ramda';

import setAuthToken from '../utils/setAuthToken';

class AuthStore {
  @observable
  isAuthenticated = false;
  @observable
  user = {};

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
        this.isAuthenticated = true;
      })
      .catch(err => {
        console.log(err);
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

  @action
  findUserProfile = () => {
    setTimeout(() => {
      axios
        .get('/auth/user_cryptocurrencies', this.user.id)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }, 3000);
  };
}

export default new AuthStore();
