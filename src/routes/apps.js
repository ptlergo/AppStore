module.exports = (express) => {
  const router = express.Router();

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

  // POST app
  router.route('/apps/:id')
    .post((req, res) => {
      const appId = req.params.id;
    });

  return router;
};
