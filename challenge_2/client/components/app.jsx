import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const ENDPOINT = 'https://api.coindesk.com/v1/bpi/historical/close.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.canvasRef = React.createRef();
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }

  static getCoinDeskData(start, end) {
    const query = start && end ? `?start=${start}&end=${end}` : '';
    return fetch(ENDPOINT + query)
      .then(res => res.json());
  }

  static createGraph(ctx, dates, data) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: 'Bitcoin closing price',
          backgroundColor: '#FF0000',
          borderColor: '#FF0000',
          data: data,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
	      borderWidth: 5
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'series',
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing price ($)'
            }
          }]
        }
      }
    });
  }

  componentDidMount() {
    // Set the context to allow Chart.js to access canvas
    this.setState({ ctx: this.canvasRef.current.getContext("2d") });

    App.getCoinDeskData()
      .then(result => {
        let obj = result.bpi;
        let dates = Object.keys(obj);
        let data = [];

        for (let key of dates) {
          data.push(obj[key]);
        }

        this.setState({
          dates,
          data
        });
      });
  }
  
  onStartChange(event) {
    this.setState({
      startDate: event.target.value
    });
    this.getDataWithDates(event.target.value, this.state.endDate);
  }
  
  onEndChange(event) {
    this.setState({
      endDate: event.target.value
    });
    this.getDataWithDates(this.state.startDate, event.target.value);
  }
  
  getDataWithDates(start, end) {
    const startDate = new Date(start), endDate = new Date(end);
    
    if (startDate.getTime() < endDate.getTime()) {
      App.getCoinDeskData(start, end)
        .then(result => {
        let obj = result.bpi;
        let dates = Object.keys(obj);
        let data = [];

        for (let key of dates) {
          data.push(obj[key]);
        }

        this.setState({
          dates,
          data
        });
      });
    }
  }

  render() {
    const { dates, data, ctx } = this.state;

    // Create a Chart.js object and pass on a canvas element, if acquired through the React ref.
    if (ctx) {
      App.createGraph(ctx, dates, data);
    }

    return (
      <div>
        <div id="dateContainer">
          <input type="date" onChange={this.onStartChange} />
          <input type="date" onChange={this.onEndChange} />
        </div>
        <canvas ref={this.canvasRef} id="myChart" width="800" height="400"></canvas>
        <p>Powered by <a href="https://www.coindesk.com/price/">CoinDesk</a></p>
      </div>
    );
  }
}
