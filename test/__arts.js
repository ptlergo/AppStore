const expect = require('chai').expect;
const request = require('supertest');

describe('art route testing ', () => {
  let server;

  beforeEach(() => {
    // Open server before each stub
    server =require('../src/server');
  });

  afterEach(() => {
    // Close server after each stub
    server.close();
  })
  it('should be an art asset', (done) => {
    done();
  });
});
