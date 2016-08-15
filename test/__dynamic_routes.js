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
  const routesObj = {
    // User routes
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
      {
        route: '/api/v1/users/:id',
        method: 'delete',
        desc: 'delete one user',
      },
      {
        route: '/api/v1/users/:id',
        method: 'post',
        desc: 'update one user',
        fakeData: {
          name: faker.name.findName(),
          age: faker.random.number(),
        },
      },
      {
        route: '/api/v1/users/',
        method: 'post',
        desc: 'create one user',
        fakeData: {
          name: faker.name.findName(),
          age: faker.random.number(),
        },
      },
    ],
    // App routes
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
      {
        route: '/api/v1/users/:id/apps',
        method: 'get',
        desc: 'read all apps of one user',
      },
      {
        route: '/api/v1/apps/:id',
        method: 'delete',
        desc: 'delete one app',
      },
      {
        route: '/api/v1/apps/:id',
        method: 'post',
        desc: 'update one app',
        fakeData: {
          title: faker.name.title(),
          description: faker.company.catchPhraseDescriptor(),
          releaseDate: faker.phone.phoneNumber(),
        },
      },
      {
        route: '/api/v1/apps/',
        method: 'post',
        desc: 'create one app',
        fakeData: {
          title: faker.name.title(),
          description: faker.company.catchPhraseDescriptor(),
          releaseDate: faker.phone.phoneNumber(),
        },
      },
    ],
    // Artasset routes
    artassets: [
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
        fakeData: {
          name: faker.name.findName(),
          age: faker.random.number(),
        },
      },
      {
        route: '/api/v1/users/',
        method: 'post',
        desc: 'create one user',
        fakeData: {
          name: faker.name.findName(),
          age: faker.random.number(),
        },
      },
    ],
  }; // END of routes object

  // Functions to test methods
  function getMethod(x) {
    let s = console.log(x.users[0].route);
    if (routesObj.method === 'get') {
      s = console.log('working', routesObj.method);
    }
    return s;
  }

  Object.keys(routesObj).forEach((prop) => {
    console.log(prop);
  });


  it('should be working', (done) => {
    getMethod(routesObj);
    done();
  });
});
