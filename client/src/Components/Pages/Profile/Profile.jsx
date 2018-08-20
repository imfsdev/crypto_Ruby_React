import React, { Component } from 'react';

import ReactAux from '../../Hoc/ReactAux';
import Navbar from '../../Hoc/Navbar/Navbar';

export default class Profile extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container">
          <p>hi</p>
          <div className="columns">
            <div className="column" />
            <div className="column" />

            <div className="column" />
          </div>
        </div>
      </ReactAux>
    );
  }
}
