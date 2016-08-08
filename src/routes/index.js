module.exports = (express) => {
  const router = express.Router();

  router.use((req, res, next) => {
    console.log('http method hit');

    next();
  });
  // Routes apps
  router.get('/', (req, res) => {
    res.json({ msg: 'home route' });
  });

  // Register individual route files
  router.use('/api/v1/', require('./api/apps')(express));
  router.use('/api/v1/', require('./api/arts')(express));
  router.use('/api/v1/', require('./api/users')(express));

  return router;
};
