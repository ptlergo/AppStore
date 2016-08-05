module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  // individual routes
  router.use('/api/v1/', require('./apps')(express));
  router.use('/api/v1/', require('./users')(express));
  router.use('/api/v1/', require('./arts')(express));

  return router;
};
