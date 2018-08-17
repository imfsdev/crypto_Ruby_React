import { observable, action, computed } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import * as R from 'ramda';

import setAuthToken from '../utils/setAuthToken';

class AuthStore {
  @observable
  user = {};

  @action
  setUser = decoded => {
    // this.isAuthenticated = R.isEmpty(decoded);
    this.user = decoded;
    console.log(this.user);
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
      .post('/auth/login', {
        name: 'hello2',
        email: 'hello@world2',
        password: 'password2'
      })
      .then(res => {
        this.user = jwtDecode(res.data.access_token);
        console.log(this.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  registerUser = userData => {
    console.log(userData);
    axios.post('/auth/register', userData).then(res => {
      localStorage.setItem('jwtToken', res.data.access_token);
    });
  };
}

export default new AuthStore();
