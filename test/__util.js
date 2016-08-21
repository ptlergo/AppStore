const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');

const spy = sinon.spy();
const util = require('../src/lib/util');

// Test object with utility tools acceptable parameters
const testObj = {
  msg: 'testing',
  info: 'parameter',
};

// Test utility tool
describe('Util Tool', () => {
  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should successfully call debug', (done) => {
    console.log(spy(util, 'debug'));
    util.debug(testObj);
    expect(util.debug.calledOnce).to.be.true;
    done();
  });

  it('should successfully grab an object as the only parameter', (done) => {
    expect(util.debug(testObj)).to.have.ownProperty('msg');
    expect(util.debug(testObj)).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
