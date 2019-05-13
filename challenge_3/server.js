const express = require('express');
const bluebird = require('bluebird');

const app = express();
bluebird.promisifyAll(app);
const PORT = 3005;

app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Connected to server and listening on port: ${PORT}`);
});


