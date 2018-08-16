import { observable, action, computed } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';

class AuthStore {
  @observable
  user = {};
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
  registerUser = userdata => {
    axios.post('/auth/register');
  };
}

export default new AuthStore();
