const express = require('express');
const bodyParser = require('body-parser');
const util = require('lincoln-logs');
require('localenvironment');

const app = express();

// Using body-parser grab data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Load all routes in routes folder
app.use('/', require('./routes')(express));

const server = app.listen(port, () => {
  util.debug({ msg: 'server active on port: ', info: port });
});

module.exports = server;
