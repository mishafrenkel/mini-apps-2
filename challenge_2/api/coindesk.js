const request = require('request');

const app = "https://api.coindesk.com/v1/bpi/historical/close.json";

const getPrice = (callback) => {
  const options = {
    url: api
  };

  request(options, (err, res, body) => {
    if (error) {
      callback(error, null);
    } else {
      console.log('Response:', JSON.stringify(response));
      callback(null, bodyObj.bpi)
    }
  });
};

const getPriceByDates = (callback, startDate, endDate) => {
  const options = {
    url: `${api}?start=${startDate}&end=${endDate}`
  };
  request(options, (err, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      let bodyObj = JSON.parse(body);
      callback(null, bodyObj.bpi);
    }
  });
};

module.exports = {
  getPrice, 
  getPriceByDates
}