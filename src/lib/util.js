const fs = require('fs');
const colors = require('colors');
const logSymbols = require('log-symbols');

// Theme colors for message types
colors.setTheme({
  prompt: 'grey',
  help: 'cyan',
  warn: 'yellow',
  error: 'red',
});

// Debug method
exports.debug = (obj) => {
  const msg = '[ ' + obj.msg + ']';
  const info = obj.info;
  /* eslint prefer-template: 0 */
  const statement = obj.msg + obj.info + '\n';
  const tStamp = ' [current time] '.prompt;

  // DISPLAY only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile('./logs/log.log', statement, { flag: 'a' },
      (err) => { if (err) { throw err; } }
    );// END of appendFile
    if (obj === null) {
      console.log(logSymbols.error, 'ERROR!');
    } else {
      console.log('\n', logSymbols.success, tStamp, msg.help, '\n', info);
    }
    // Print debug to console stream
    console.log('\n');
    // console.log(logSymbols.success, 'finished successfully!');
    // console.log(logSymbols.info, 'finished heres info!');
    // console.log(logSymbols.warning, 'finished but a warning!');
    // console.log(logSymbols.error, 'finished with errors!');
  }

  return obj;
};
