const db = require('./db');
const util = require('../lib/util');

// READ(all) all from database
exports.all = (errorCallback, successCallBack) => {
  // Use sequelize method findAll
  db.user.findAll().then(successCallBack).catch(errorCallback);
  util.debug();
};// END of all

// CREATE(add) into database
exports.add = (obj, errorCallbackorCallback, successCallBack) => {
  // Use sequelize method create
  db.user.create(obj).then(successCallBack).catch(errorCallbackorCallback);
  util.debug({ msg: 'USER ADD MODEL: ', term: obj });
};// END of add

// READ(one) single from database
exports.one = (id, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.user.find({
    where: {
      id: id.id,
    },
    // Find all relations from sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(successCallBack).catch(errorCallback);
  util.debug({ msg: 'USER FIND ONE MODEL: ', term: id });
};// END of one

// UPDATE single from database
exports.update = (obj, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.user.find({
    where: {
      id: obj.id,
    },
  })
  // Promise to take current data and update it with new user data
  .then((existingData) => {
    existingData.updateAttributes(obj).then(successCallBack).catch(errorCallback);
  }).catch(errorCallback);
  util.debug({ msg: 'USER UPDATE MODEL: ', term: obj });
};// END of update

// DELETE(remove) single from database
exports.remove = (id, errorCallback, successCallBack) => {
  // Use sequelize method find
  db.user.destroy({
    where: {
      id: id.id,
    },
  }).then(successCallBack).catch(errorCallback);
  util.debug({ msg: 'USER DELETE MODEL: ', term: id });
};// END of remove
