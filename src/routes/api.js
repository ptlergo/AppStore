module.exports = (express) => {
  const router = express.Router();

  // All Routes in api
  router.get('/', (req, res) => {
    res.json({ hello: 'world' });
  });

  return router;
};
