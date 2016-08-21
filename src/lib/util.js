/* eslint prefer-template: 0 */
const fs = require('fs');
const colors = require('colors');
const logSymbols = require('log-symbols');

// Theme colors for message types
colors.setTheme({
  prompt: 'grey',
  help: 'cyan',
  warn: 'yellow',
  fail: 'red',
  win: 'green',
});

// Time formatting
const date = new Date();
const timeIso = date.toISOString();
const printTime = '[ ' + timeIso + ' ]';

// Debug method
exports.debug = (obj) => {
  const filePath = './logs/lincoln.log';
  const msg = '[ ' + obj.msg + ']';
  const info = obj.info;
  const success = 'finished successfully';
  const statement = obj.msg + obj.info + '\n';

  // DISPLAY only when DEBUG=true
  if (process.env.DEBUG) {
    // Write to log file
    fs.appendFile(filePath, statement, { flag: 'a' },
      (err) => { if (err) { throw err; } }
    );// END of appendFile

    if (obj.info === 'err' || obj.info === 'undefined') {
      throw console.log(logSymbols.fail, 'ERROR!');
    }
    // Display formatted debug log
    console.log('\n', printTime.prompt,
    '\n', msg.help, '\n ', info, '\n',
     '[ '.win, logSymbols.success, success.win, logSymbols.success, ' ]\n'.win);
  }

  return obj;
};
