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
  const obj = {
    users: [
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
    ],
    apps: [
      {
        route: '/api/v1/apps',
        method: 'get',
        desc: 'read all apps',
      },
      {
        route: '/api/v1/apps/:id',
        method: 'get',
        desc: 'read one app',
      },
    ] };
  // Functions to test methods
  function getMethod(x) {
    let s = console.log(x.users[0].route);
    if (routesArray.method === 'get') {
      s = console.log('working', routesArray.method);
    }
    return s;
  }

  Object.keys(obj).forEach((prop) => {
    console.log(prop);
  });


  it('should be working', (done) => {
    getMethod(obj);
    done();
  });
});
