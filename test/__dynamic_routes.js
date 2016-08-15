const expect = require('chai').expect;
const request = require('supertest');

// Array of all routes in API
const routesArray = [
  // User Routes
  {
    route: '/api/v1/users',
    method: 'get',
    desc: 'read all users',
  },
  {
    route: '/api/v1/users/:id',
    method: 'get',
    desc: 'read one user',
  },
  {
    route: '/api/v1/users/:id',
    method: 'delete',
    desc: 'delete one user',
  },
  {
    route: '/api/v1/users/:id',
    method: 'post',
    desc: 'update one user',
  },
  {
    route: '/api/v1/users/',
    method: 'post',
    desc: 'create one user',
  },
];

describe('TESTING ROUTES DYNAMICALLY ', () => {
  let server;

  // Start server before stubs
  beforeEach('open server', (done) => {
    server = require('../src/server');

    done();
  });

  // Close server after stubs
  afterEach('close server', (done) => {
    server.close();
    done();
  });

  it('should hit route ', (done) => {
    done();
  });
});
