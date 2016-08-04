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
      },
      { id: 2 },
    ]);
  });

  router.get('/v1/apps/:id', (req, res) => {
    res.json({ id: req.params.id });
  });

  return router;
};
