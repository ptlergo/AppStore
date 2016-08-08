const db = require('./db');

// CREATE into database
exports.add = (obj, errorCallback, successCallBack) => {
  // Use sequelize method create
  db.app.create(obj).then(successCallBack).catch(errorCallback);
};

// READ all from database
exports.all = (err, success) => {
  // Use sequelize method findAll
  db.app.findAll().then(success).catch(err);
};

// READ single from database
exports.one = (payload, err, success) => {
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

// UPDATE single from database
exports.update = (payload, err, success) => {
  // Use sequelize method find
  db.app.find({
    where: {
      id: payload.id,
    },
  })
  // Promise to take current data and update it with new user data
  .then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// DELETE single from database
exports.remove = (payload, err, success) => {
  // Use sequelize method find
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
