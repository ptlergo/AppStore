const db = require('./db');

// CREATE into database
exports.add = (obj, errorCallbackorCallback, successCallBack) => {
  // Use sequelize method create
  db.app.create(obj).then(successCallBack).catch(errorCallbackorCallback);
};

// READ all from database
exports.all = (errorCallback, success) => {
  // Use sequelize method findAll
  db.app.findAll().then(success).catch(errorCallback);
};

// READ single from database
exports.one = (obj, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.app.find({
    where: {
      id: obj.id,
    },
    // Find all relations from sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(successCallBack).catch(errorCallback);
};

// UPDATE single from database
exports.update = (obj, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.app.find({
    where: {
      id: obj.id,
    },
  })
  // Promise to take current data and update it with new user data
  .then((existingData) => {
    existingData.updateAttributes(obj).then(successCallBack).catch(errorCallback);
  }).catch(errorCallback);
};

// DELETE single from database
exports.remove = (obj, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.app.destroy({
    where: {
      id: obj.id,
    },
  }).then(successCallBack).catch(errorCallback);
};
