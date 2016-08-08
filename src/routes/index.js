module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ msg: 'home route' });
  });

  // Register individual route files
  router.use('/api/v1/', require('./api/apps')(express));
  router.use('/api/v1/', require('./api/users')(express));
  router.use('/api/v1/', require('./api/arts')(express));

  return router;
};
