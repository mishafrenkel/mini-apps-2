import React from 'react';
import Header from './Header';
<<<<<<< HEAD:challenge_2/client/components/app.jsx
import CoinList from './CoinsList';
import Details from './Details';
=======
import Coins from './CoinList';
import Details from './CoinDetails';
>>>>>>> 120e5fc6c452417837410292eb6dae47eabcfa9a:challenge_2/oldComponents/App.jsx
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoins: [
        { "time": { "updated": "Sep 18, 2013 17:27:00 UTC", "updatedISO": "2013-09-18T17:27:00+00:00" }, "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. Non-USD currency data converted using hourly conversion rate from openexchangerates.org", "bpi": { "USD": { "code": "USD", "rate": "126.5235", "description": "United States Dollar", "rate_float": 126.5235 }, "CNY": { "code": "CNY", "rate": "775.0665", "description": "Chinese Yuan", "rate_float": "775.0665" } } }
      ],
      history: {
        "bpi": {
          "2013-09-01": 128.2597,
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
        "time": {
          "updated":"Sep 6, 2013 00:03:00 UTC",
          "updatedISO": "2013-09-06T00:03:00+00:00"
        },
      },
      startDate: '2018-10-01',
      endDate: '2018-10-18',
      graphType: 'bar',
    };
    this.selectGraphType = this.selectGraphType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

<<<<<<< HEAD:challenge_2/client/components/app.jsx
  selectGraphType(event) {
    this.setState({
      graphType: event.target.value;
=======
  select(e) {
    this.setState({
      graphType: e.target.value,
>>>>>>> 120e5fc6c452417837410292eb6dae47eabcfa9a:challenge_2/oldComponents/App.jsx
    });
  }

  handleChange(e) {
    const key = e.target.name;
    const newState = {}
    newState[key] = e.target.value;
    this.setState(newState);
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
    axios('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(results => {
        this.setState({
          currentCoins: [results.data],
        });
      });
    
    axios(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then(results => {
        this.setState({
          history: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD:challenge_2/client/components/app.jsx
        <div id="mainDisplay">
          <CoinList coins={this.state.currentCoins} />
          <Details 
            graphType={this.state.graphType}
            coin={this.state.currentCoins[0]}
            history={this.state.history.bpi}
            selectGraphType={this.select}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
=======
        <div id="main">
          <Coins coins={this.state.currentCoins} />
          <Details
          graphType={this.state.graphType}
          coin={this.state.currentCoins[0]}
          history={this.state.history.bpi}
          select={this.select}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
>>>>>>> 120e5fc6c452417837410292eb6dae47eabcfa9a:challenge_2/oldComponents/App.jsx
          />
        </div>
      </div>
    )
  }
}

export default App;
