const ArtAsset = require('../../models/artasset');

module.exports = (express) => {
  const router = express.Router();

  // Route CREATE an art assets
  router.post('/artassets', (req, res) => {
    const payload = req.body;
    // Add data from route body into database
    ArtAsset.add(payload,
      (err) => {
        res.status(500).json(err);
      },
      (data) => {
        res.status(200).json(data);
      }
    );
  });

  // Route READ all art assets
  router.get('/artassets', (req, res) => {
    // Find all art assets in database to display in route
    ArtAsset.all(
      (err) => {
        res.status(500).json(err);
      },
      (data) => {
        res.status(200).json(data);
      }
    );
  });

  // Route READ a single art asset
  router.get('/artassets/:id', (req, res) => {

  });

  // Route UPDATE single art asset
  router.post('/artassets/:id', (req, res) => {

  });

  // Route DELETE single art asset
  router.delete('/artassets/:id', (req, res) => {

  });

  return router;
};
