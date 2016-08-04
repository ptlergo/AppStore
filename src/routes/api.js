module.exports = (express) => {
  const router = express.Router();
  const apps = require('./apps');

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });


  // GET all users
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'user1',
      },
      {
        id: 2,
        name: 'user2',
      },
    ]);
  });

  // GET user of id
  router.get('/users/:id', (req, res) => {
    res.json({
      id: 1,
      name: 'user1',
    });
  });

  return router;
};
