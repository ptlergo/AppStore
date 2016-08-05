const expect = require('chai').expect;
const request = require('supertest');

describe('Arts Routes', () => {
  let server;
  let art;

  beforeEach(() => {
    // Open server before each stub
    server =require('../src/server');
  });

  afterEach(() => {
    // Close server after each stub
    server.close();
  });

  it('should be an art asset', (done) => {
    request(server)
    .get('/api/v1/arts')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const arts = res.body;

      // save into array
      this.art = arts[0];

      // Expect json object to be array
      expect(arts.length).to.be.above(0);
    })
    .end(done);
  });

  it('should be an art asset', (done) => {
    done();
  });
});
