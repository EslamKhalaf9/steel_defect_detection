import React, { Component } from 'react';

import Chart from 'chart.js';

export default class Charts extends Component {
  componentDidMount() {
    const canvases = document.querySelectorAll('canvas');
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];
    const data = {
      labels: ['Defect 1', 'Defect 2', 'Defect 3', 'Defect 4'],
      datasets: [
        {
          label: '# of Defects',
          data: [897, 247, 5150, 801],
          backgroundColor: colors2,
          borderWidth: 3,
        },
      ],
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
    };

    const doughnut = document.getElementById('doughnutChart').getContext('2d');
    const bar = document.getElementById('barChart').getContext('2d');

    const doughnutChart = new Chart(doughnut, {
      type: 'doughnut',
      data,
      options,
    });

    const barChart = new Chart(bar, {
      type: 'bar',
      data,
      options,
    });

    canvases.forEach((canvas) => {
      canvas.setAttribute('eslam', 'khalad');
    });
  }
  render() {
    return (
      <div id="statistics" className="charts mt-5 text-center">
        <h2 className="display">Charts</h2>
        <p className="lead">
          Here is some statisitcs about the deteced images and the most common
          defect classes
        </p>
        <div className="chartsContainer m-auto col-md-6 row">
          <div className="col-6">
            Chart Details
          </div>
          <canvas
            className="col-6"
            width="200"
            height="100"
            id="doughnutChart"
          ></canvas>
        </div>
        <div className="chartsContainer m-auto col-md-6 row">
          <div className="col-6">
            Chart Details
            </div>
          <canvas
            className="col-6"
            width="200"
            height="100"
            id="barChart"
          ></canvas>
        </div>
      </div>
    );
  }
}
