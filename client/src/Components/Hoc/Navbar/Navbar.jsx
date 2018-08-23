import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ReactAux from '../../Hoc/ReactAux';
import Modal from '../../Hoc/Modal/Modal';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

// keeping normal a links because using Link with react router causes problems.. :(
@inject('authStore')
@observer
class Navbar extends Component {
  state = {
    // eslint-disable-next-line
    burgerOpen: false,
    modal: false,
    dropdown: ''
  };

  // toggle navbar burger menu open/close
  toggleBurger = () => {
    this.setState(prevState => ({
      burgerOpen: !prevState.burgerOpen
    }));
  };

  toggleDropdown = e => {
    e.stopPropagation();
    this.setState({
      modal: true,
      dropdown: e.target.id
    });
  };

  closeDropdowns = () => {
    this.setState({
      modal: false,
      dropdown: ''
    });
  };

  render() {
    const { authStore } = this.props;
    console.log(window.location.href);
    return (
      <ReactAux>
        {this.state.modal ? <Modal modalClick={this.closeDropdowns} /> : null}
        <nav className={`navbar ${window.innerWidth > 1089 ? 'is-transparent' : 'is-light'}`}>
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <strong>
                  <p>CryptoTracker</p>
                </strong>
              </a>
              <span
                onClick={this.toggleBurger}
                onKeyDown={this.toggleBurger}
                id="burger"
                className={`navbar-burger burger ${this.state.burgerOpen ? 'is-active' : ''}`}
                tabIndex="0"
                role="menu"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className={`navbar-menu${this.state.burgerOpen ? 'is-active' : ''}`}>
              {/* TODO: make this work on live with proper url or react router (?? hard??) */}
              <div className="navbar-start">
                {window.window.location.href === 'http://localhost:3000/' ? null : (
                  <a className="navbar-item" href="/">
                    Home
                  </a>
                )}
                {authStore.user.user_id ? (
                  <a href="/profile" className="navbar-item">
                    Your Profile
                  </a>
                ) : null}
              </div>
              <div className="navbar-end">
                {!authStore.user.user_id ? (
                  <ReactAux>
                    <div className="desktop-auth">
                      <div
                        className={`navbar-item has-dropdown ${
                          this.state.dropdown === 'signup' ? 'is-active' : ''
                        }`}
                      >
                        <button id="signup" onClick={this.toggleDropdown} className="navbar-item">
                          Sign Up
                        </button>
                        <div className="navbar-dropdown is-boxed is-right">
                          <Register />
                        </div>
                      </div>
                      <div
                        className={`navbar-item has-dropdown ${
                          this.state.dropdown === 'login' ? 'is-active' : ''
                        }`}
                      >
                        <button id="login" onClick={this.toggleDropdown} className="navbar-item">
                          Log In
                        </button>
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
                    <button onClick={authStore.logoutUser} className="navbar-item">
                      <strong>Logout</strong>
                    </button>
                  </ReactAux>
                )}
              </div>
            </div>
          </div>
        </nav>
      </ReactAux>
    );
  }
}

export default Navbar;
