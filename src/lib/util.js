const fs = require('fs');
const colors = require('colors');

// Debug method
exports.debug = (obj) => {
  // Display tool only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log',
    `${obj.msg} ${obj.term} \n`,
      { flag: 'a' },
      (err) => {
        if (err) {
          throw err;
        }
      });

    // Write to console
    console.log(`${obj.msg} ${obj.term}`);
  }
  return {
    msg: obj.msg,
    term: obj.term,
  };
};
