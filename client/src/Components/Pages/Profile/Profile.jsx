import React, { Component } from 'react';

import ReactAux from '../../Hoc/ReactAux';
import Navbar from '../../Hoc/Navbar/Navbar';

import ProfileFriends from './ProfileFriends/ProfileFriends';
import ProfileStats from './ProfileStats/ProfileStats';

export default class Profile extends Component {
  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container section">
          <div className="columns">
            <div className="column is-9">
              <ProfileStats />
            </div>
            <div className="column">
              <ProfileFriends />
            </div>
          </div>
        </div>
      </ReactAux>
    );
  }
}
