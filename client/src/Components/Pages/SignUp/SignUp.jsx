import React, { Component } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
    const { values, errors } = this.props;
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
                <Form>
                  <div className="field">
                    <div className="control">
                      <div className="help has-text-grey-dark">Username</div>
                      <Field
                        field="name"
                        className={`input ${errors.name ? 'is-danger' : ''}`}
                        name="name"
                        autoComplete="username"
                        placeholder="Your Username"
                      />
                      {errors.name && <p className="help is-danger">This email is invalid</p>}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <div className="help has-text-grey-dark">Email</div>
                      <Field
                        field="email"
                        className={`input ${errors.email ? 'is-danger' : ''}`}
                        placeholder="Your Email"
                        name="email"
                        type="email"
                        autoComplete="email"
                      />
                      <p className="help is-danger">This email is invalid</p>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <div className="help has-text-grey-dark">Password</div>
                      <Field
                        field="password"
                        className={`input ${errors.password ? 'is-danger' : ''}`}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Your Password"
                      />
                      <p className="help is-danger">This email is invalid</p>
                    </div>
                  </div>
                  <button type="submit" className="button is-block is-info is-fullwidth">
                    Sign Up
                  </button>
                  <a href="/" className="help">
                    Forgot your password?
                  </a>
                  {/* TODO: add oauth options ? */}
                </Form>
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
      name: '',
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required()
      .min(3),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, errors) {
    // post request goes here
    console.log(errors);
  }
})(SignUp);

export default FormikSignUp;
