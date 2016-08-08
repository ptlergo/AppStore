const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Using body-parser grab data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Load all routes in routes folder
app.use('/', require('./routes')(express));

const server = app.listen(port, () => {
  console.log('server active on ', port);
});

module.exports = server;
