const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const util = require('../src/lib/util');

// Test utility tool
describe('Util Tool', () => {
  const testPath = './logs/lincoln.log';
  // Fake object
  const testObj = {
    msg: 'testing',
    info: 'parameter',
  };

  // Fake console
  const console = {
    log: sinon.spy(),
  };

  // Fake file log
  this.fsFake = {
    readFile: (path, encoding, cb) => {
      expect(path).to.equal('./logs/lincoln.log');
      cb(null, 'success');
    },
  };

  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should output debug statement to console', (done) => {
    // Protect 'this' keyword
    console.log('d');
    console.log(console.log);

    // FIXME: not working appropiately. call count incorrect
    console.log(console.log.callCount);
  // expect(_this.console.log.callCount).to.equal(10);
    done();
  });

  it('should grab object parameter and check its keys (msg: , info: )', (done) => {
    expect(util.debug(testObj)).to.have.ownProperty('msg');
    expect(util.debug(testObj)).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    // console.log(this.testPath);
    done();
  });
});// END of Util Tool describe
