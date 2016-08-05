module.exports = (express) => {
  const router = express.Router();

  // Routes arts
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

  return router;
};
