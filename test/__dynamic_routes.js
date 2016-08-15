const expect = require('chai').expect;

// Array of all routes in API
const routesArray = [
  {
    route: '/api/v1/users',
    method: 'get',
  },
  {
    route: '/api/v1/users/:id',
    method: 'get',
  },
];

describe('TESTING ROUTES DYNAMICALLY ', () => {
  let server;

  // Start server before stubs
  beforeEach('open server', () => {
    server = require('../src/server');
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
