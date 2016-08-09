const expect = require('chai').expect;
const request = require('supertest');

describe('Art assets Routes', () => {
  let server;
  let artasset;

  beforeEach(() => {
    // Open server before each stub
    server = require('../src/server');
  });

  afterEach(() => {
    // Close server after each stub
    server.close();
  });

  it('should list all art assets on /api/v1/artassets GET', (done) => {
    request(server)
    .get('/api/v1/artassets')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const artassets = res.body;

      // save into array
      this.artasset = artassets[0];

      // Expect json object to be array
      expect(artassets.length).to.be.above(0);
    })
    .end(done);
  });

  it('should list art asset obj with id, title, & srcLink on /api/v1/arts/:id GET', (done) => {
    request(server)
    .get(`/api/v1/artassets/${this.artasset.id}`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      artasset = res.body;
      expect(artasset).to.have.property('id');
      expect(artasset).to.have.property('title');
      expect(artasset).to.have.property('srcLink');
    })
    .end(done);
  });
});
