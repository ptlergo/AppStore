module.exports = (express) => {
  const router = express.Router();

  // routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  router.get('/v1/apps', (req, res) => {
    res.json([
      {
        id: 1,
        title: 'app1',
        description: 'first app',
        releaseDate: '1/1/1991',
      },
      {
        id: 2,
        title: 'app2',
        description: '2nd app',
        releaseDate: '1/1/1991',
      },
    ]);
  });

  router.get('/v1/apps/:id', (req, res) => {
    const appId = req.params.id;
    res.json({
      id: appId,
      title: 'app1',
      description: 'first app',
      releaseDate: '1/1/1991',
    });
  });

  // Routes users
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  router.get('/v1/users', (req, res) => {
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

  router.get('/v1/users/:id', (req, res) => {
    const appId = req.params.id;
    res.json({
      id: appId,
      name: 'app1',
    });
  });

  return router;
};
