const fs = require('fs');
const colors = require('colors');

// Theme colors for message types
colors.setTheme({
  prompt: 'grey',
  info: 'bgWhite',
  help: ['cyan', 'underline'],
  warn: 'yellow',
  error: 'red',
});

// Debug method
exports.debug = (obj) => {
  const msg = obj.msg.help;
  const term = obj.term;
  const statement = obj.msg + obj.term + '\n';

  // Display only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log',
    obj.term,
      { flag: 'a' },
      (err) => {
        if (err) {
          throw err;
        }
      });// END of appendFile

    // Print debug to console stream
    console.log(msg, term);
  }

  return obj;
};
