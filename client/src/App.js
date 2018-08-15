import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import SignUp from './Components/Pages/SignUp/SignUp';
import LogIn from './Components/Pages/LogIn/LogIn';

// TODO: make it so the user redirects to their profile if they are logged in (can't go to login)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
