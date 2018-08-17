import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import ReactAux from '../../Hoc/ReactAux';
import Modal from '../../Hoc/Modal/Modal';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

@inject('authStore')
@observer
class Navbar extends Component {
  state = {
    // eslint-disable-next-line
    modal: false,
    modalTarget: ''
  };

  closeDropdowns = e => {
    const modalTarget = document.getElementById(this.state.modalTarget);
    modalTarget.classList.remove('is-active');
    this.setState({ modal: false, modalTarget: '' });
  };

  // toggle navbar
  toggleBurger = () => {
    const burgerIcon = document.getElementById('burger');
    const dropMenu = document.getElementById('navMenu');
    dropMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
  };
  toggleDropdown = e => {
    e.stopPropagation();
    const dropdown = e.target.parentNode;
    this.setState({
      modal: true,
      modalTarget: e.target.parentNode.id
    });
    dropdown.classList.toggle('is-active');
  };

  render() {
    const { authStore } = this.props;
    return (
      <ReactAux>
        {this.state.modal ? <Modal modalClick={this.closeDropdowns} /> : null}
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
              <span
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
              </span>
            </div>

            <div id="navMenu" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  Home
                </a>
              </div>
              <div className="navbar-end">
                {!authStore.user.user_id ? (
                  <ReactAux>
                    <div className="desktop-auth">
                      <div id="signup" className="navbar-item has-dropdown">
                        <button onClick={this.toggleDropdown} className="navbar-item">
                          Sign Up
                        </button>
                        <div className="navbar-dropdown is-boxed is-right">
                          <Register />
                        </div>
                      </div>
                      <div id="login" className="navbar-item has-dropdown ">
                        <button onClick={this.toggleDropdown} className="navbar-item">
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
      </ReactAux>
    );
  }
}

export default Navbar;
