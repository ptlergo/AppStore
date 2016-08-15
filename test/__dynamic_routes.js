const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const util = require('../src/lib/util');

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

describe('TESTING ROUTES DYNAMICALLY ', () => {
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


  // Loop through Array
  for (let i = 0; i <= routesArray; i++) {
    if (routesArray[i].method === 'get') {
      it(routesArray[i].desc, (done) => {
        request(server)
        .get(routesArray[i].route)
        .expect(200)
        .end(done);
        util.debug({ msg: 'inside loop working', info: 'get' });
      });
    }
  }
});
