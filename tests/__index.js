const mocha = require('mocha');
const expect = require('chai').expect;

describe('Unit test SErver: ', () => {
  it('Should return nothing', () => {
    expect(5).to.be.equal(5);
    server.request('api/').expect(200, done);

  });
});
