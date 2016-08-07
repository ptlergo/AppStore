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
  router.use('/api/v1/', require('./arts')(express));
  router.use('/api/v1/', require('./apps')(express));
  router.use('/api/v1/', require('./users')(express));

  return router;
};
