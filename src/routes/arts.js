module.exports = (express) => {
  const router = express.Router;

  router.get('/arts', (req, res) => {
    res.json({ h: 'art!' });
  });

  return router;
};
