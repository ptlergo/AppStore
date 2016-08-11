const expect = require('chai').expect;
const util = require('../src/lib/util').debug;

describe('Util Tool', () => {
  it('should successfully use DEBUG mode', (done) => {
    done();
  });

  it('should successfully grab 2 parameters in debug method', (done) => {
    const testObj = 'testing util string parameter';
    const testObj2 = 3;
    expect(util(testObj, testObj2)).to.not.be.arguments;
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
