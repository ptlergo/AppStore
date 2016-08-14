const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const util = require('../src/lib/util').debug;

describe('Util Tool debug()', () => {
  it('should successfully grab an object as the only parameter', (done) => {
    const statement = util({ msg: 'testing', info: 'parameter' });
    expect(statement).to.have.ownProperty('msg');
    expect(statement).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
