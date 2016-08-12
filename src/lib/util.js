const fs = require('fs');
// Create file to write to
const writableStream = fs.createWriteStream('./logs/log.log', { flag: 'a' });

exports.debug = (obj) => {
  // Write to log file
  writableStream.write(obj.msg);
  return {
    msg: obj.msg,
    term: obj.term,
  };
};
