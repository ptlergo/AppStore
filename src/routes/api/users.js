const user = require('../../models/user');
const util = require('../../lib/util');

module.exports = (express) => {
  const router = express.Router();
  // READ all users
  router.get('/users', (req, res) => {
    user.all(
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ ALL USER ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ ALL USER ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // READ user of 'id'
  router.get('/users/:id', (req, res) => {
    const userInfo = req.body;
    userInfo.id = req.params.id;

    user.one(userInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ ONE USER ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ ONE USER ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // DELETE user of 'id'
  router.delete('/users/:id', (req, res) => {
    const userInfo = req.body;
    userInfo.id = req.params.id;

    user.remove(userInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ ONE USER ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'DELETE USER ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // UPDATE user of 'id'
  router.post('/users/:id', (req, res) => {
    const userInfo = req.body;
    userInfo.id = req.params.id;

    user.update(userInfo,
        (err) => {
          res.status(500).json(err);
          util.debug({ msg: 'UPDATE USER ROUTE FAILED: ', info: err });
        },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'UPDATE USER ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // CREATE new user
  router.post('/users', (req, res) => {
      // Dirty data from user save as payload
    const payload = req.body;
    user.add(payload,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'CREATE USER ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'CREATE USER ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  return router;
};
