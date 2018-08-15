import { observable, action, computed } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';

class AuthStore {
  @observable
  user = {};
  @action
  loginUser = userData => {
    console.log(userData);
    axios
      .post('/users/sign_in', {
        user: {
          email: 'hi@lol.com',
          password: 'password'
        }
      })
      .then(res => {
        this.user = res.data;
        console.log(this.user);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default new AuthStore();
