const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');

const util = require('../src/lib/util');

// Test utility tool
describe('Util Tool', () => {
  beforeEach(() => {
    // Fake object
    this.testObj = {
      msg: 'testing',
      info: 'parameter',
    };
    // Fake console
    this.console = {
      log: sinon.spy(),
    };
  });

  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should output debug statement to console', (done) => {
    // Protect 'this' keyword
    const _this = this;
    util.debug(_this.testObj, () => {
      expect(_this.console.log.callCount).to.equal(1);
      done();
    });
  });

  it('should grab object parameter and check its keys (msg: , info: )', (done) => {
    expect(util.debug(this.testObj)).to.have.ownProperty('msg');
    expect(util.debug(this.testObj)).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
