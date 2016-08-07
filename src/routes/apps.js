module.exports = (express) => {
  const router = express.Router();

  // CREATE new app
  router.route('/apps')
    .post((req) => {
      const obj = req.body;
      const appnew = {
        id: obj.id,
        title: obj.title,
        description: obj.description,
        releaseDate: obj.releaseDate,
      };
      // debug log
      console.log(appnew);
    });

  // GET all apps
  router.get('/apps', (req, res) => {
    const appstuff = req.body;
    res.json(appstuff);
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

  return router;
};
