import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import jwtDecode from 'jwt-decode';

import Home from './Components/Pages/Home/Home';
import Profile from './Components/Pages/Profile/Profile';
import Register from './Components/Pages/Auth/Register';
import Login from './Components/Pages/Auth/Login';

import setAuthToken from './utils/setAuthToken';

import '../src/styles/app.scss';
@inject('authStore')
@observer
class App extends Component {
  componentDidMount() {
    // sets the background image to be the image set in the database
    // currently just sets a pre-selected imgur link for test
    if (localStorage.jwtToken) {
      // set auth token to the local storage  token if it exists
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(localStorage.jwtToken);
      this.props.authStore.setUser(decoded);

      // if the jwt is expired, log them out and remove the jwt
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // logout user
        this.props.authStore.logoutUser();
        // clear current profile
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile"  component={Profile} />
          <Route path="/register"  component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
