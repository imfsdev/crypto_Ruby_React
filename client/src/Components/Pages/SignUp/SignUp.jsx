import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <section className="hero signup">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <div className="columns is-mobile signup-buttons">
                  <div className="column is-half-mobile signup-active">
                    <div className="button is-fullwidth">Sign Up</div>
                  </div>
                  <div className="column is-half-mobile">
                    <div className="button is-fullwidth">Log in</div>
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
