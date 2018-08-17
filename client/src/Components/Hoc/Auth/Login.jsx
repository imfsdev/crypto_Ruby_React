import React, { Component } from 'react';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import { withFormik, Form, Field } from 'formik';
import { inject, observer } from 'mobx-react';
import authStore from '../../../stores/authStore';

@inject('authStore')
@observer
class Login extends Component {
  render() {
    // eslint-disable-next-line
    const { errors, touched, isSubmitting } = this.props;
    return (
      <section className="auth">
        <div className="has-text-centered">
          <div className="column">
            <Form>
              <div className="field">
                <div className="control">
                  <div className="help has-text-grey-dark">Email</div>
                  <Field
                    field="email"
                    className={`input ${touched.email && errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="help is-danger">{touched.email && errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <div className="help has-text-grey-dark">Password</div>
                  <Field
                    field="password"
                    className={`input ${touched.password && errors.password ? 'is-danger' : ''}`}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="help is-danger">{touched.password && errors.password}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className={`button is-block is-info is-fullwidth ${
                  isSubmitting ? 'is-loading' : ''
                }`}
              >
                Log In
              </button>
              <div className="columns">
                <div className="column">
                  <a href="/" className="help">
                    Already have an account?
                  </a>
                </div>
                <div className="column">
                  <a href="/" className="help">
                    Forgot your password?
                  </a>
                </div>
              </div>
              {/* TODO: add oauth options ? */}
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

const FormikAuth = withFormik({
  // default form values
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    // TODO: add username limitations (spaces, etc)
    // Validations for user input
    email: Yup.string()
      .email()
      .max(160)
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    axios
      .post('/auth/login', values)
      .then(res => {
        console.log(res);
        resetForm();
        localStorage.setItem('jwtToken', res.data.access_token);
        const decoded = jwtDecode(res.data.access_token);
        setSubmitting(false);
        authStore.setUser(decoded);
        //  redirect after success
        // set a flash message after success(?)
      })
      .catch(err => {
        console.log(err.response.data);
        // destructures the errors from back end
        setSubmitting(false);
        const { email, password } = err.response.data;
        //  destructures the errors into errors to display after submit
        setErrors({
          email,
          password
        });
      });
  }
})(Login);

export default FormikAuth;
