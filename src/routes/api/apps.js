const app = require('../../models/app');
const user = require('../../models/user');
const util = require('lincoln-logs');

module.exports = (express) => {
  const router = express.Router();
  // CREATE new app
  router.post('/apps', (req, res) => {
      // Dirty data from user save as payload
    const payload = req.body;
    app.add(payload,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'CREATE APP ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'CREATE APP ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // READ app of 'id'
  router.get('/apps/:id', (req, res) => {
    const appInfo = req.body;
    appInfo.id = req.params.id;

    app.one(appInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ APP ROUTE FAIL: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ APP ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // READ app of specific user 'id'
  router.get('/users/:id/apps', (req, res) => {
    const appInfo = req.body;
    appInfo.id = req.params.id;

    user.one(appInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ APP ROUTE FAIL: ', info: err });
      },
      (data) => {
        res.status(200).json(data.apps);
        util.debug({ msg: 'READ APP ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // READ all apps
  router.get('/apps', (req, res) => {
    app.all(
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ APP ROUTE FAIL: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ APP ROUTE SUCCESS: ', info: data });
      }
    );
  });

  // UPDATE app of 'id'
  router.post('/apps/:id', (req, res) => {
    const appInfo = req.body;
    appInfo.id = req.params.id;

    app.update(appInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ APP ROUTE FAIL: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ APP ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // DELETE app of 'id'
  router.delete('/apps/:id', (req, res) => {
    const appInfo = req.body;
    appInfo.id = req.params.id;

    app.remove(appInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ APP ROUTE FAIL: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ APP ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  return router;
};
