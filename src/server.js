const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.json({hello: 'world'});
})

app.listen(port, () => {
  console.log('server active on ', port);
});
