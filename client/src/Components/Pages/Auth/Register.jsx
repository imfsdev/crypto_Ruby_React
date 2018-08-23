import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Navbar from '../../Hoc/Navbar/Navbar';
import ReactAux from '../../Hoc/ReactAux';
import RegisterForm from '../../Hoc/Auth/Register';

@inject('authStore')
@observer
class Register extends Component {
  render() {
    if (this.props.authStore.user) {
      window.location.href = '/profile';
    }
    return (
      <ReactAux>
        <Navbar />
        <div className="page-auth">
          <div className="page-auth-title">
            <h1 className="title">Sign Up</h1>
          </div>
          <div className="section">
            <div className="page-auth-form">
              <div className="box">
                <RegisterForm />
                <div className="page-auth-form-meta">
                  <Link to="/login">Already have an account?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}

export default Register;
