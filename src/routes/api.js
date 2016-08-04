module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  // GET all apps
  router.get('/apps', (req, res) => {
    res.json([
      {
        id: 1,
        title: 'app1',
        description: 'first app',
        releaseDate: '2016-08-04T16:52:49+00:00',
      },
      {
        id: 2,
        title: 'app2',
        description: '2nd app',
        releaseDate: '2016-08-04T16:52:49+00:00',
      },
    ]);
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
