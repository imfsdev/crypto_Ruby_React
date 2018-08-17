import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ReactAux from '../../Hoc/ReactAux';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

@inject('authStore')
@observer
class Navbar extends Component {
  state = {
    // eslint-disable-next-line
    signup: false,
    // eslint-disable-next-line
    login: false
  };

  // toggle navbar
  toggleBurger = () => {
    const burgerIcon = document.getElementById('burger');
    const dropMenu = document.getElementById('navMenu');
    dropMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
  };
  toggleDropdown = e => {
    const dropdown = e.target.parentNode;
    e.stopPropagation();
    dropdown.classList.toggle('is-active');
  };

  render() {
    const { authStore } = this.props;
    console.log(authStore.User);
    return (
      <nav className="navbar is-transparent is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              onClick={this.toggleBurger}
              onKeyDown={this.toggleBurger}
              id="burger"
              className="navbar-burger burger"
              tabIndex="0"
              role="menu"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <div className="navbar-item has-dropdown">
                <a className="navbar-link" href="/documentation/overview/start/">
                  Docs
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="/documentation/overview/start/">
                    Overview
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/modifiers/syntax/"
                  >
                    Modifiers
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a
                    className="navbar-item"
                    href="https://bulma.io/documentation/layout/container/"
                  >
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
              {!authStore.user.user_id ? (
                <ReactAux>
                  <div className="desktop-auth">
                    {/* eslint-disable-next-line */}
                    <div onClick={this.toggleDropdown} className="navbar-item has-dropdown">
                      <a className="navbar-link">Sign Up</a>
                      <div className="navbar-dropdown is-boxed is-right">
                        <Register />
                      </div>
                    </div>
                    <div
                      onClick={this.toggleDropdown}
                      onKeyDown={this.toggleDropdown}
                      role="button"
                      tabIndex="0"
                      className="navbar-item has-dropdown "
                    >
                      <a className="navbar-link">Log In</a>
                      <div className="navbar-dropdown is-boxed is-right">
                        <Login />
                      </div>
                    </div>
                  </div>
                  <div className="mobile-auth">
                    <Link to="/register" className="navbar-item">
                      Sign Up
                    </Link>
                    <Link to="/login" className="navbar-item">
                      Login
                    </Link>
                  </div>
                </ReactAux>
              ) : (
                <ReactAux>
                  <div className="navbar-item">
                    <p> Your Account</p>
                    User ID:
                    {authStore.user.user_id}
                  </div>
                  <div className="navbar-item">
                    <p>Logout</p>
                  </div>
                </ReactAux>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
