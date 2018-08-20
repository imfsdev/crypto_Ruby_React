import React, { Component } from 'react';

// make columns drag/droppable
// each  has custom colors?
export default class ProfileFriends extends Component {
  render() {
    const friends = [
      {
        name: 'Billy',
        coins: [1, 2, 3, 4, 5]
      }
    ];

    return (
      <div className="box">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Friends</th>
              <th>
                <abbr />
              </th>
              <th>
                <abbr />
              </th>
              <th>
                <abbr />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="/">Billy</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Billy</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Billy</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Billy</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Billy</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
