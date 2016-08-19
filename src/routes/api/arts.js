const ArtAsset = require('../../models/artasset');
const util = require('lincoln-logs');

module.exports = (express) => {
  const router = express.Router();

  // Route CREATE an art assets
  router.post('/artassets', (req, res) => {
    const payload = req.body;
    // Add data from route body into database
    ArtAsset.add(payload,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'CREATE ART ASSET ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'CREATE ART ASSET ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // Route READ all art assets
  router.get('/artassets', (req, res) => {
    // Find all art assets in database to display in route
    ArtAsset.all(
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ ALL ART ASSET ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ ALL ART ASSET ROUTE SUCCESS: ', info: data });
      }
    );
  });

  // Route READ a single art asset
  router.get('/artassets/:id', (req, res) => {
    const artInfo = req.body;
    artInfo.id = req.params.id;
    // Find one art asset
    ArtAsset.one(artInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'READ ART ASSET ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'READ ART ASSET ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // Route UPDATE single art asset
  router.post('/artassets/:id', (req, res) => {
    const artInfo = req.body;
    artInfo.id = req.params.id;
    // Find one art asset to update
    ArtAsset.update(artInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'UPDATE ART ASSET ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'UPDATE ART ASSET ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  // Route DELETE single art asset
  router.delete('/artassets/:id', (req, res) => {
    const artInfo = req.body;
    artInfo.id = req.params.id;
    // Find one art asset to remove
    ArtAsset.remove(artInfo,
      (err) => {
        res.status(500).json(err);
        util.debug({ msg: 'DELETE ART ASSET ROUTE FAILED: ', info: err });
      },
      (data) => {
        res.status(200).json(data);
        util.debug({ msg: 'DELETE ART ASSET ROUTE SUCCESS: ', info: data.dataValues });
      }
    );
  });

  return router;
};
