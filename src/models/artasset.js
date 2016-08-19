const db = require('./db');
const util = require('lincoln-logs');

// READ(all) all from database
exports.all = (errorCallback, successCallBack) => {
  // Use sequelize method findAll
  db.artasset.findAll().then(successCallBack).catch(errorCallback);
  util.debug({ msg: 'ART ASSET MODEL: find all art asset success:', info: successCallBack });
};// END of all

// CREATE(add) into database
exports.add = (obj, errorCallbackorCallback, successCallBack) => {
  // Use sequelize method create
  db.artasset.create(obj).then(successCallBack).catch(errorCallbackorCallback);
  util.debug({ msg: 'ART ASSET MODEL: add art asset with id:', info: obj.id });
};// END of add

// READ(one) single from database
exports.one = (id, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.artasset.find({
    where: {
      id: id.id,
    },
    // Find all relations from sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(successCallBack).catch(errorCallback);
  util.debug({ msg: 'ART ASSET MODEL: find art asset with id:', info: id.id });
};// END of one

// UPDATE single from database
exports.update = (obj, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.artasset.find({
    where: {
      id: obj.id,
    },
  })
  // Promise to take current data and update it with new user data
  .then((existingData) => {
    existingData.updateAttributes(obj).then(successCallBack).catch(errorCallback);
  }).catch(errorCallback);
  util.debug({ msg: 'ART ASSET MODEL: update art asset with id:', info: obj.id });
};// END of update

// DELETE(remove) single from database
exports.remove = (id, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.artasset.destroy({
    where: {
      id: id.id,
    },
  }).then(successCallBack).catch(errorCallback);
  util.debug({ msg: 'ART ASSET MODEL: delete art asset with id:', info: id });
};// END of remove
