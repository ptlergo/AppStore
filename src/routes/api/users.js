const user = require('../../models/user');
const util = require('../../lib/util');

module.exports = (express) => {
  const router = express.Router();
  // READ all users
  router.get('/users', (req, res) => {
    user.all(
      (err) => {
        res.status(500).json(err);
      },
      (data) => {
        res.status(200).json(data);
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
      },
      (data) => {
        res.status(200).json(data);
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
      },
      (data) => {
        res.status(200).json(data);
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
        },
      (data) => {
        res.status(200).json(data);
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
      },
      (data) => {
        res.status(200).json(data);
      }
    );
    // debug log
    console.log(payload);
  });

  return router;
};
