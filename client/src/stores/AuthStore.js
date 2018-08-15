import { observable, action, computed } from 'mobx';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';

class AuthStore {
  // to be implemented later on
  @observable
  isLoaded = 'hello';

  @observable
  user = {};

  @observable
  isSignedIn = false;

  @action
  loginUser = userData => {
    // console.log(userData);
    console.log(
      jwtDecode(
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTUzNDM0NjU2OCwiZXhwIjoxNTM0MzUwMTY4LCJqdGkiOiJlNTRlNDI1OS1iZTgyLTQzODgtYWE2My1iY2FlMjUwOTFhYWEifQ.X39Mh4zNYgaKaxq0xmAOS_Ckpc7LGeVrtkerIyIsP9k'
      )
    );
    // axios
    //   .post('api/users/sign_in', userData)
    //   .then(res => {
    //     const { token } = res.data;
    //     localStorage.setItem('jwtToken', token);
    //     setAuthToken(token);
    //     const decoded = jwtDecode(token);
    //     console.log(decoded);
    //     this.user = decoded;
    //     this.isSignedIn = true;
    //     console.log(this.user);
    //     setTimeout(() => {
    //       this.isAuthenticated = true;
    //     }, 600);
    //   })
    //   .catch(err => {
    //     // this.errors = err.response.data;
    //   });
  };
}

export default new AuthStore();
