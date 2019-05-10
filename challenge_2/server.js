<<<<<<< HEAD
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '/public')));


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
=======
const path = require('path');
const express = require('express');

const PORT = 5000;
const app = express();
>>>>>>> 26f12b49c17d1543540da7f39ffcc7d2e19a79a8

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => { console.log(`Server listening in Port ${PORT}`); });
