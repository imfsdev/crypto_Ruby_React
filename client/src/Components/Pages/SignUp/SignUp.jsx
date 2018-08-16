import React, { Component } from 'react';

export default class SignUp extends Component {
  toggleForm = e => {
    const signup = document.getElementById('signup');
    const login = document.getElementById('login');
    if (e.target.id === 'signup') {
      signup.classList.add('signup-active');
      login.classList.remove('signup-active');
    } else {
      login.classList.add('signup-active');
      signup.classList.remove('signup-active');
    }
  };
  render() {
    return (
      <section className="hero signup">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <div className="columns is-mobile signup-buttons">
                  <div className="column is-half-mobile">
                    <div
                      tabIndex="0"
                      onKeyDown={this.toggleForm}
                      role="button"
                      onClick={this.toggleForm}
                      id="signup"
                      className="button is-fullwidth signup-active"
                    >
                      Sign Up
                    </div>
                  </div>
                  <div className="column is-half-mobile">
                    <div
                      tabIndex="0"
                      onKeyDown={this.toggleForm}
                      role="button"
                      id="login"
                      onClick={this.toggleForm}
                      className="button is-fullwidth"
                    >
                      Log in
                    </div>
                  </div>
                </div>
                <form>
                  <div className="field">
                    <div className="control">
                      {/* eslint-disable-next-line */}
                      <input className="input" type="email" placeholder="Your Email" autoFocus="true" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <button className="button is-block is-info is-fullwidth">Sign Up</button>
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
