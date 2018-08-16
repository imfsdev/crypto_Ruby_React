import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Overview
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a
                  className="navbar-item is-active"
                  href="https://bulma.io/documentation/components/breadcrumb/"
                >
                  Components
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://localhost:4000"
                    href="/"
                  >
                    <span>Sign Up</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-white" href="/">
                    <span>Log In</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
