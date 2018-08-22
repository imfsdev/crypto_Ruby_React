import React, { Component } from 'react';

// make columns drag/droppable
// each  has custom colors?
export default class ProfileFriends extends Component {
  render() {
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
                <a href="/">Ali</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Robin</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Brian</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Duncan</a>
              </td>
              <td>BTC</td>
              <td>LTC</td>
              <td>XLN</td>
            </tr>
            <tr>
              <td>
                <a href="/">Astro</a>
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
