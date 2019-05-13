import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import BPIChart from './Chart.jsx';
import DateSelector from './DateSelector.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
      startDate: '',
      endDate: '',
    }

    this.renderChart = this.renderChart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.renderChart();
  }

  renderChart(query) {
    axios.get('/coins', query)
      .then(results => {
        this.setState({
          labels: Object.keys(results.data),
          data: Object.values(results.data),
        })
      })
      .catch(err => console.error(err));  
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value  
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = { 
      params: {
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }
    }
    this.renderChart(query);
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <DateSelector handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <BPIChart labels={this.state.labels} data={this.state.data}/>
          <p>Powered by CoinDesk</p>
        </div>
      </div>
    )
  }
}

export default App;
