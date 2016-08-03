const expect = require('chai').expect;
const request = require('supertest');

// Unit Test for APP Routes
describe('App Routes', () => {
  const server;
  const app;

  // open server at each stub
  beforeEach(() => {
    server = require('../src/server');
  });

  // close server after each stub done
  afterEach(() => {
    server.close();
  });

  // Test for Multiple Apps
  it('GET /api/v1/apps returns multiple apps', (done) => {
    request(server)
      .get('/api/v1/apps')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const apps = res.body;

        // Save one single app from the list to test on in later tests
        this.app = apps[0]

        expect(apps.length).to.be.above(0)
      })
      .end(done)
  });

  // Test for a single app
  it('GET /api/v1/apps/:id returns an app obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/apps/' + this.app.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const app = res.body;
        expect(app).to.have.property('id')
        expect(app).to.have.property('title')
        expect(app).to.have.property('description')
        expect(app).to.have.property('releaseDate')
      })
      .end(done)
  });

});
