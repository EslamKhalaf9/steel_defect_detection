import React, { Component } from 'react';

import Chart from 'chart.js';

export default class Charts extends Component {
  componentDidMount() {
    const canvases = document.querySelectorAll('canvas');

    const data = {
      labels: ['Class 1', 'Class 2', 'Class 3', 'Class 4'],
      datasets: [
        {
          label: '# of Defects',
          data: [12, 15, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
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
      <div className="charts mt-5 text-center">
        <h2 className="display">Charts</h2>
        <p className="lead">
          Here is some statisitcs about the deteced images and the most common
          defect classes
        </p>
        <div className="chartsContainer m-auto col-md-6 row">
          <canvas
            className="col-12"
            width="200"
            height="100"
            id="doughnutChart"
          ></canvas>
          <canvas
            className="col-12"
            width="200"
            height="100"
            id="barChart"
          ></canvas>
        </div>
      </div>
    );
  }
}
