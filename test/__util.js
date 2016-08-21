const expect = require('chai').expect;
const assert = require('chai').assert;
const util = require('../src/lib/util');
const fs = require('fs');

// Test utility tool
describe('Util Tool', () => {
  const testPath = './logs/lincoln.log';

  // Fake object
  const testObj = {
    msg: 'testing',
    info: 'parameter',
  };

  it('should have a function debug()', (done) => {
    expect(util.debug).to.be.a('function');
    done();
  });

  it('should grab object parameter and check its keys (msg: , info: )', (done) => {
    expect(util.debug(testObj)).to.have.ownProperty('msg');
    expect(util.debug(testObj)).to.have.ownProperty('info');
    done();
  });
});// END of Util Tool describe
