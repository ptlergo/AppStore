const db = require('./db');

// CREATE into database
exports.create = (payload, err, success) => {
  // Use sequelize method create
  db.app.create(payload).then(success).catch(err);
};

// READ all from database
exports.findAll = (err, success) => {
  // Use sequelize method findAll
  db.app.findAll().then(success).catch(err);
};

// READ single from database
exports.find = (payload, err, success) => {
  // Use sequelize method find
  db.app.find({
    where: {
      id: payload.id,
    },
    // Find all relations from sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};
