const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('./controllers.js');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/coins', controllers.getCachedData);

app.use(express.static(path.join(__dirname, '/public')));


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
