import React, { Component } from 'react';
import Header from './Header';
import CoinList from './CoinsList';
import Details from './Details';
import axios from 'axios';

const ENDPOINT = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoins: [
        { "time": { "updated": "Sep 18, 2013 17:27:00 UTC", "updatedISO": "2013-09-18T17:27:00+00:00" }, "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. Non-USD currency data converted using hourly conversion rate from openexchangerates.org", "bpi": { "USD": { "code": "USD", "rate": "126.5235", "description": "United States Dollar", "rate_float": 126.5235 }, "CNY": { "code": "CNY", "rate": "775.0665", "description": "Chinese Yuan", "rate_float": "775.0665" } } }
      ],
      history: {
        "bpi": {
          "2015-10-01": 228.2178,
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
        "time": {
          "updated":"Sep 6, 2013 00:03:00 UTC",
          "updatedISO": "2013-09-06T00:03:00+00:00"
        },
      },
      startDate: '2019-4-25',
      endDate: '2019-5-10',
      graphType: 'bar',
    };
    this.selectGraphType = this.selectGraphType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  selectGraphType(event) {
    this.setState({
      graphType: event.target.value;
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value; 
    const updatedState = {};
    this.setState({
      name: value
    });
  }

  handleSearch(e) {
    e.preventDefault();

    axios(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then(results => {
        this.setState({
          history: results.data,
        });
      });
  }

  componentDidMount() {
    axios(ENDPOINT)
      .then(results => {
        this.setState({
          currentCoins: [results.data]
        });
      })
      .catch(err => console.error('Something went wrong', err));

    axios(ENDPOINT)
      .then(results => {
        this.setState({
          history: results.data
        })
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="mainDisplay">
          <CoinList coins={this.state.currentCoins} />
          <Details 
            graphType={this.state.graphType}
            coin={this.state.currentCoins[0]}
            history={this.state.history.bpi}
            selectGraphType={this.select}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

