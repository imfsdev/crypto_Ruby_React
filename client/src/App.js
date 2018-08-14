import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.fetch('/api/cryptocurrencies/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
      <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
