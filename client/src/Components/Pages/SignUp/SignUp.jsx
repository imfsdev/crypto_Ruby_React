import React, { Component } from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';

class SignUp extends Component {
  state = {
    signup: true,
    login: false
  };
  toggleForm = e => {
    const signup = document.getElementById('signup');
    const login = document.getElementById('login');
    if (e.target.id === 'signup') {
      signup.classList.add('signup-active');
      login.classList.remove('signup-active');
      this.setState({
        signup: true,
        login: false
      });
    } else {
      login.classList.add('signup-active');
      signup.classList.remove('signup-active');
      this.setState({
        signup: false,
        login: true
      });
    }
    console.log(this.state);
  };
  render() {
    const { values } = this.props;

    console.log(values);

    return (
      <section className="hero signup">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <div className="columns is-mobile signup-buttons">
                  <div className="column is-half-mobile">
                    <button
                      onClick={this.toggleForm}
                      id="signup"
                      className="button is-fullwidth signup-active"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="column is-half-mobile">
                    <button id="login" onClick={this.toggleForm} className="button is-fullwidth">
                      Log in
                    </button>
                  </div>
                </div>
                <form id="basic-form">
                  <div className="field">
                    <div className="control">
                      <input
                        field="email"
                        className="input"
                        name="email"
                        type="email"
                        // placeholder="Your Email"
                        value={values.email}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <button type="submit" className="button is-block is-info is-fullwidth">
                    Sign Up
                  </button>
                  <a href="/" className="help">
                    Forgot your password?
                  </a>
                  {/* TODO: add oauth options ? */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const FormikSignUp = withFormik({
  mapPropsToValues() {
    return {
      email: 'test text'
    };
  }
})(SignUp);

export default FormikSignUp;
