module.exports = (express) => {
  const router = express.Router();
  const app = require('../models/app');

  console.log(app);

  // CREATE new app
  router.post('/apps', (req, res) => {
      // Dirty data from user save as payload
    const payload = req.body;
    app.create(payload, (err) => {
      res.status(500).json(err);
    });
    (data) => {
      res.status(200).json(data);
    };
    // debug log
    console.log(payload);
  });

  // GET all apps
  router.get('/apps', (req, res) => {
    const appstuff = req.body;
    res.json(appstuff);
  });

  // GET app of 'id'
  router.get('/apps/:id', (req, res) => {
    res.json({
      id: 1,
      title: 'app1',
      description: 'first app',
      releaseDate: '2016-08-04T16:52:49+00:00',
    });
  });

  return router;
};
