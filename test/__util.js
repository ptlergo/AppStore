const expect = require('chai').expect;
const Util = require('../src/lib/util');

describe('Util Tool', () => {
  it('should output to console from debug method', (done) => {
    console.log(Util.debug('hh'));
    expect(Util.debug.length).to.be.above(0);
    done();
  });
});// END of App Model describe
