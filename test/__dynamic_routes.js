const expect = require('chai').expect;

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
