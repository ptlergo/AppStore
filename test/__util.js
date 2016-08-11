const expect = require('chai').expect;
const Util = require('../src/lib/util');

describe('Util Tool', () => {
  it('should output to console from debug method', (done) => {
    expect(Util.debug).to.be.above(0);
    done();
  });
});// END of App Model describe
