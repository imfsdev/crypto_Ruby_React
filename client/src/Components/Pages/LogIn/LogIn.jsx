import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import LoginForm from './LoginForm/LoginForm';

// import authStore from '../../../stores/authStore';

@inject('authStore')
@observer
class Login extends Component {
  render() {
    console.log(this.props.authStore.user);
    // eslint-disable-next-line
    const { authStore } = this.props;
    return (
      <div>
        <LoginForm />
        <div className="button"> bulma</div>
      </div>
    );
  }
}

export default Login;
