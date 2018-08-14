import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './app.scss';

@inject('authStore')
@observer
class App extends Component {
  componentDidMount() {
    window
      .fetch('/api/cryptocurrencies/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
    console.log(this.props.authStore.isLoaded);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
