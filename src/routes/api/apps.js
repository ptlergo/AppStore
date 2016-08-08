const app = require('../../models/app');

module.exports = (express) => {
  const router = express.Router();
  // READ all apps
  router.get('/apps', (req, res) => {
    app.findAll((err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data);
    });
  });

  // CREATE new app
  router.post('/apps', (req, res) => {
      // Dirty data from user save as payload
    const payload = req.body;
    app.create(payload, (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data);
    });
    // debug log
    console.log(payload);
  });

  // READ app of 'id'
  router.get('/apps/:id', (req, res) => {
    const appinfo = req.body;
    appinfo.id = req.params.id;

    app.find(appinfo, (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data);
    });
  });

  // DELETE app of 'id'
  router.delete('/apps/:id', (req, res) => {
    const appinfo = req.body;
    appinfo.id = req.params.id;

    app.destroy(appinfo, (err) => {
      res.status(500).json(err);
    },
    (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
