import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ReactAux from '../../Hoc/ReactAux';
import Navbar from '../../Hoc/Navbar/Navbar';

import ProfileFriends from './ProfileFriends/ProfileFriends';
import ProfileStats from './ProfileStats/ProfileStats';

@inject('authStore')
@observer
class Profile extends Component {
  render() {
    const { authStore } = this.props;
    return (
      <ReactAux>
        <Navbar />
        {authStore.user.name ? (
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
        ) : (
          <button className="is-loading" />
        )}
      </ReactAux>
    );
  }
}
export default Profile;
