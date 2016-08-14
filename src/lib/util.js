const fs = require('fs');
const colors = require('colors');

// Theme colors for message types
colors.setTheme({
  prompt: 'grey',
  help: ['cyan', 'underline'],
  warn: 'yellow',
  error: 'red',
});

// Debug method
exports.debug = (obj) => {
  const msg = obj.msg.help;
  const info = obj.info;
  /* eslint prefer-template: 0 */
  const statement = obj.msg + obj.info + '\n';

  // DISPLAY only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log', statement, { flag: 'a' },
      (err) => { if (err) { throw err; } }
    );// END of appendFile

    // Print debug to console stream
    console.log(msg, info);
  }

  return obj;
};
