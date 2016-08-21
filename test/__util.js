const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');

const spy = sinon.spy();
const util = require('../src/lib/util');

const statement = util.debug({ msg: 'testing', info: 'parameter' });

describe('Util Tool debug()', () => {
  it('should successfully call callAPI', (done) => {
    spy(util, 'callAPI');
    done();
  });

  it('should successfully grab an object as the only parameter', (done) => {
    expect(statement).to.have.ownProperty('msg');
    expect(statement).to.have.ownProperty('info');
    done();
  });

  it('should successfully output to logs folder', (done) => {
    done();
  });
});// END of Util Tool describe
