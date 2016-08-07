module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'home route' });
  });

  // individual routes
  router.use('/api/v1/', require('./arts')(express));
  router.use('/api/v1/', require('./apps')(express));
  router.use('/api/v1/', require('./users')(express));

  return router;
};
