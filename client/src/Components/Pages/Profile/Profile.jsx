import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

import ReactAux from '../../Hoc/ReactAux';
import Navbar from '../../Hoc/Navbar/Navbar';

export default class Profile extends Component {
  render() {
    const lineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    };
    const lineChartOptions = {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    };

    return (
      <ReactAux>
        <Navbar />
        <div className="container">
          <p>hi</p>
          <div className="columns">
            <div className="column" />
            <ChartistGraph
              className="ct-chart"
              data={lineChartData}
              options={lineChartOptions}
              type="Line"
            />

            <div className="column" />

            <div className="column" />
          </div>
        </div>
      </ReactAux>
    );
  }
}
