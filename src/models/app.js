const db = require('./db');

exports.create = (payload, err, success) => {
  // Use sequelize method create
  db.app.create(payload).then(success).catch(err);
};
