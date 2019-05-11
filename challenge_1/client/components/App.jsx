import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

const YEAR = 0, DESCRIPTION = 1, ITEMS_PER_PAGE = 10;
const TOTAL = "X-Total-Count";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: DESCRIPTION,
      events: [],
      offset: 0 // Number of items to offset, divide by items per page to get page number
    }

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.query = '';
    this.total = 0;
  }

  fetchDataByDate(date, offset, limit) {
    return fetch(`/events?date=${date}&_page=${Math.floor(offset / limit) + 1}&_limit=${limit}`)
      .then(res => {
        this.total = Number.parseInt(res.headers.get(TOTAL), 10);
        return res.json();
      });
  }

  fetchDataByText(text, offset, limit) {
    return fetch(`/events?q=${text}&_page=${Math.floor(offset / limit) + 1}&_limit=${limit}`)
      .then(res => {
        this.total = Number.parseInt(res.headers.get(TOTAL), 10);
        return res.json();
      });
  }
  
  makeRequest(mode, offset, limit) {
    let promise = mode === DESCRIPTION ?
      this.fetchDataByText(this.query, offset, limit) : this.fetchDataByDate(this.query, offset, limit);

      return promise
        .then(events => {
          this.setState({
            total: this.total,
            offset: 0,
            events
          });
        });
  }

  // Page clicked, load relevant data
  handlePageClick(data) {
    const { mode } = this.state;
    let selected = data.selected;
    
    let offset = Math.ceil(selected * ITEMS_PER_PAGE);
    this.makeRequest(mode, offset, ITEMS_PER_PAGE);
  }

  onTypeChange(mode) {
    this.setState({ mode });
  }

  onInputChange(event) {
    this.query = event.target.value;
    if(!this.query) {
      this.setState({ events: [], offset: 0 });
    }
  }

  onSearchClick() {
    if (this.query) {
      const { mode } = this.state;
      this.makeRequest(mode, 0, ITEMS_PER_PAGE);
    }
  }

  render() {
    const { mode, events, total } = this.state;

    return (
      <div>
        <div id="searchUI">
          <button type="button" className="search" onClick={this.onTypeChange.bind(this, YEAR)}>Search By Year</button>
          <button type="button" className="search" onClick={this.onTypeChange.bind(this, DESCRIPTION)}>Search By Description</button>
          <input type="text" className="search" placeholder={ mode ? 'Search by text...' : 'Search by year...' } onChange={this.onInputChange} />
          <button type="button" className="btn" onClick={this.onSearchClick}>Search</button>
        </div>
        <div id="eventList">
          { events.length > 0
            ? (
              <div>
                <ul>
                  {events.map(obj => ( 
                    <li className="eventItem">
                      <p>{obj.date}</p>
                      <p>{obj.description}</p>
                    </li>
                  ))}
                </ul>
                <div id="react-paginate">
                  <ReactPaginate previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"page-item page-link"}
                    pageCount={Math.floor(total / ITEMS_PER_PAGE)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    pageLinkClassName={"page-link"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
                 </div>
              </div>
            ): <h3>Historical events will show up here!</h3>
          }
        </div>
      </div>
    );
  }
}

export default App;