module.exports = (express) => {
  const router = express.Router();

  // All Routes in api
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  router.get('/v1/apps', (req, res) => {
    res.json([{}, {}]);
  });

  router.get('/v1/apps/:id', (req, res) => {
    res.json({ hello: req.params.id });
  });

  return router;
};
