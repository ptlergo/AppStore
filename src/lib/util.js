const fs = require('fs');
const colors = require('colors');

// Debug method
exports.debug = (obj) => {
  const statement = obj.msg + obj.term + '\n';
  // Display tool only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log',
    statement,
      { flag: 'a' },
      (err) => {
        if (err) {
          throw err;
        }
      });

    // Write to console
    console.log(obj.msg, obj.term);
  }
  return obj;
};
