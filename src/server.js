const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Using body-parser grab data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Router file registration with ''/api' prefix. pass in express to file.
app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  console.log('server active on ', port);
});
