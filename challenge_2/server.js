const express = require('express');
const app = express();
const port = 5000;

const coindesk = require('./data/coindesk.js');

app.use(express.static(__dirname + "./public"));

app.get('/prices', (req, res) => {
  coindesk.getPrice((err, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Succesful API call to grab prices! ----> BY PRICE');
      res.send(result);
    }
  });
});

app.get('/dates', (req, res) => {
  coindesk.getPriceByDates((err, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
      console.log('Successful API call ---> BY DATE')
    }
  });
});

app.listen(port, () => {
  console.log(`Express server is running at port ${port}`)
});
