const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');

const util = require('../src/lib/util');

// Test object with utility tools acceptable parameters
const testObj = {
  msg: 'testing',
  info: 'parameter',
};

// Test utility tool
describe('Util Tool', () => {
  beforeEach(() => {
    this.testObj = {
      msg: 'testing',
      info: 'parameter',
    };
    this.console = {
      log: sinon.spy(),
    };
  });

  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should successfully call debug', (done) => {
    done();
  });

  it('should successfully grab parameter object and check its keys (msg: , info: )', (done) => {
    expect(util.debug(testObj)).to.have.ownProperty('msg');
    expect(util.debug(testObj)).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
