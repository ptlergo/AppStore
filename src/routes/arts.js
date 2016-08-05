module.exports = (express) => {
  const router = express.Router();

  // Route all art assets
  router.get('/arts', (req, res) => {
    res.json([
      {
        id: 1,
        title: 'art1',
        srcLink: 'http://i.imgur.com/5e5Ihb6.jpg',
      },
      {
        id: 2,
        title: 'art2',
        srcLink: 'http://i.imgur.com/QQ3O6PO.jpg',
      },
    ]);
  });

  // Route single art asset
  router.get('/arts/:id', (req, res) => {
    res.json({
      id: 1,
      title: 'art1',
      srcLink: 'http://i.imgur.com/5e5Ihb6.jpg',
    });
  });

  return router;
};
