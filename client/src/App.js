import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Register from './Components/Pages/Auth/Register';

import '../src/styles/app.scss';
// TODO: make it so the user redirects to their profile if they are logged in (can't go to login)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
