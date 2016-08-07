const Sequelize = require('sequelize');

// Call constructor function to create new object
const connection = new Sequelize('appstore2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Test connection
connection
  .authenticate()
  .then((err) => {
    console.log('Conncetion to database successful');
  })
  .catch((err) => {
    console.log('connection to database fail', err);
  });

// Define App model
const App = connection.define('app', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  releaseDate: Sequelize.STRING,

});

// Test model insert
connection.sync().then(() => {
  App.create({
    title: 'app created from schema',
    description: 'this app was created as test for sequelize',
    releaseDate: '11/06/whatever',
  });
});

connection.sync();
