const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const util = require('../src/lib/util');

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
    // {
    //   route: '/api/v1/users/:id',
    //   method: 'delete',
    //   desc: 'delete one user',
    // },
    // {
    //   route: '/api/v1/users/:id',
    //   method: 'post',
    //   desc: 'update one user',
    //   fakeData: {
    //     name: faker.name.findName(),
    //     age: faker.random.number(),
    //   },
    // },
    // {
    //   route: '/api/v1/users/',
    //   method: 'post',
    //   desc: 'create one user',
    //   fakeData: {
    //     name: faker.name.findName(),
    //     age: faker.random.number(),
    //   },
    // },
  ];

  it('should be working', (done) => {
    request(server)
    .get('/')
    .expect(200)
    .end(done);
  });
});
