module.exports = (express) => {
  const router = express.Router();

// GET all users
  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'user1',
        age: '18',
      },
      {
        id: 2,
        name: 'user2',
        age: '50',
      },
    ]);
  });

  // GET user of id
  router.get('/users/:id', (req, res) => {
    res.json({
      id: 1,
      name: 'user1',
      age: '18',
    });
  });

  return router;
};
