const expect = require('chai').expect;
const assert = require('chai').assert;
const util = require('../src/lib/util').debug;

describe('Util Tool debug()', () => {
  it('should successfully use DEBUG mode', (done) => {
    done();
  });

  it('should successfully grab an object as the only parameter', (done) => {
    const statement = util({ msg: 'Parameter 1 of tool', term: 'Parameter 1 of tool' });
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
