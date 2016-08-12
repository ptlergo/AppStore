const fs = require('fs');
// Create file to write to
const writableStream = fs.createWriteStream('./logs/log.log', { flag: 'a' });

exports.debug = (obj) => {
  if (process.env.DEBUG) {
    // Write to log file
    writableStream.write(`${obj.msg} ${obj.term}`);
    // Write to console
    console.log(`${obj.msg} ${obj.term}`);
  }
  return {
    msg: obj.msg,
    term: obj.term,
  };
};
