module.exports = (express) => {
  const router = express.Router();

  // Routes apps
  router.get('/', (req, res) => {
    res.json({ work: 'it works works works works works' });
  });

  return router;
};
