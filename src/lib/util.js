const fs = require('fs');
const colors = require('colors');
// use colors to paint msg and term in different colors

// Debug method
exports.debug = (obj) => {
  const msg = obj.msg.red;
  const term = obj.term;
  const statement = obj.msg + obj.term + '\n';
  // Display tool only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log',
    obj.term,
      { flag: 'a' },
      (err) => {
        if (err) {
          throw err;
        }
      });
    if (term !== undefined) {
      // Write to console
      console.log(msg, term);
    }
    else { console.log('error'); }
  }
  return obj;
};
