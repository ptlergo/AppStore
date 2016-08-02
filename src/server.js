const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Using body-parser grab data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = express.Router();

router.get('/', (req, res) => {
  res.json({hello: 'world'});
});


// Router registration with /api prefix
app.use('/api', router);

app.listen(port);
console.log('server active on ', port);
