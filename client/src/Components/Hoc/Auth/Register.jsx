import React, { Component } from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field, resetForm, setErrors, setSubmitting } from 'formik';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import authStore from '../../../stores/authStore';
import setAuthToken from '../../../utils/setAuthToken';

class Register extends Component {
  render() {
    const { values, errors, touched, isSubmitting } = this.props;
    return (
      <section className="auth">
        <div className="">
          <div className="has-text-centered">
            <div className="column">
              <div className="">
                <Form>
                  <div className="field">
                    <div className="control">
                      <div className="help has-text-grey-dark">Username</div>
                      <Field
                        field="name"
                        className={`input ${touched.name && errors.name ? 'is-danger' : ''}`}
                        name="name"
                        autoComplete="username"
                        placeholder="Username"
                      />
                      {errors.name && (
                        <p className="help is-danger">{touched.name && errors.name}</p>
                      )}
                    </div>
                  </div>
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
                        className={`input ${
                          touched.password && errors.password ? 'is-danger' : ''
                        }`}
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
                    Sign Up
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
          </div>
        </div>
      </section>
    );
  }
}

const FormikAuth = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    // TODO: add username limitations (spaces, etc)
    name: Yup.string()
      .required()
      .min(3)
      .max(20),
    email: Yup.string()
      .email()
      .max(160)
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),
  // eslint-disable-next-line
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    axios
      .post('/auth/register', values)
      .then(res => {
        console.log(res);
        if (res.data.message === 'Login Successful') {
          resetForm();
          localStorage.setItem('jwtToken', res.data.access_token);
          //  redirect after success
          // set a flash message after success(?)
        }
        setSubmitting(false);
      })
      .catch(err => {
        // destructures the errors from back end
        const { name, email, password } = err.response.data.errors;
        //  destructures the errors into errors to display after submit
        setErrors({
          name,
          email,
          password
        });
      });
  }
})(Register);

export default FormikAuth;
