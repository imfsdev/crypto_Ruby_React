import React, { Component } from 'react';
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import jwtDecode from 'jwt-decode';

import setAuthToken from '../../../utils/setAuthToken';

@inject('authStore')
@observer
class LogIn extends Component {
  componentDidMount() {
    console.log(this.props.authStore.loginUser());
  }

  render() {
    return (
      <div>
        <p>login</p>
      </div>
    );
  }
}

export default LogIn;
