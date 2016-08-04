module.exports = (express) => {
  const router = express.Router();

  // All Routes in api
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

  return router;
};
