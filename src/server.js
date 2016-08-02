const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//using body-parser grab data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({hello: 'world'});
})

app.listen(port, () => {
  console.log('server active on ', port);
});
