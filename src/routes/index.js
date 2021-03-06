module.exports = (express) => {
  const router = express.Router();
  const util = require('lincoln-logs').debug;

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ msg: 'home route' });
    util({ msg: 'home route hit: ', info: 'SUCCESS' });
  });

  // Register individual route files
  router.use('/api/v1/', require('./api/apps')(express));
  router.use('/api/v1/', require('./api/users')(express));
  router.use('/api/v1/', require('./api/arts')(express));

  return router;
};
