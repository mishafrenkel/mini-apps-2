import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import chartOptions from './settings';

class BPIChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: {}
    };
    this.buildChart = this.buildChart.bind(this);
  }

  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    let context = ReactDOM.findDOMNode(this.refs.bpichart); 
    let bpiChart = new Chart(context, chartOptions);
    
    this.setState({
      chart: bpiChart
    });
  }

  componentDidUpdate() {
    const currentChart = this.state.chart;
    currentChart.data.labels = this.props.labels;
    currentChart.data.datasets[0].data = this.props.data;
    currentChart.update();
  }

  render() {
    return (
      <canvas ref='bpichart'></canvas>
    )
  }
}

export default BPIChart;


