import React, { Component } from 'react';
import Search from './Search.jsx';
import EventList from './EventList.jsx';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pageNumber: 0,
      pageCount: 1,
      queryString: '', 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  loadEvents(queryString = '') {
    axios.get(`/events?q=${queryString}&_limit=10&_page=${this.state.pageNumber}`)
      .then(response => {
        const numOfPages = Math.ceil(response.headers['x-totoal-count'] / 10);
        this.setState({
          events: response.data,
          pageCount: numOfPages,
        })
        .catch(err => console.error('Something went wrong:', err))
      })
  }

  componentDidMount() {
    this.loadEvents;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      pageNumber: 1
    }, () => {
      this.loadEvents(this.state.queryString);
    });
  }

  updateQuery(event) {
    this.setState({
      queryString: event.target.value
    });
  }

  returnHome() {
    this.setState({
      queryString: '',
      pageNumber: 1
    }, () => {
      this.loadEvents();
    });
  }

  handlePageClick(data) {
    const pageNumber = data.selected + 1;
    this.setState({ pageNumber }, () => {
      this.loadEvents(this.state.queryString);
    });
  }

  render() {
    return (
      <div>
        <nav className
      </div>
    );
  }
}