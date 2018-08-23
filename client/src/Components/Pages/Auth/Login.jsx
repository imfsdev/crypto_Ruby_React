import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import LoginForm from '../../Hoc/Auth/Login';

@inject('authStore')
@observer
class Login extends Component {
  render() {
    if (this.props.authStore.user.user_id) {
      window.location.href = '/profile';
    }
    return (
      <ReactAux>
        <Navbar />
        <div className="page-auth">
          <div className="page-auth-title">
            <h1 className="title">Log In</h1>
          </div>
          <div className="section">
            <div className="page-auth-form">
              <div className="box">
                <LoginForm />
                <div className="page-auth-form-meta">
                  <Link to="/register">Don't have an account?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}

export default Login;
