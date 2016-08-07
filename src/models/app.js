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
    console.log('Connection to database successful');
  })
  .catch((err) => {
    console.log('connection to database fail', err);
  });

// Define extensiveable App model
const App = connection.define('app', {
  title: {
    // Only one unique title and no empty title fields specified
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: 'description',
  },
  releaseDate: {
    type: Sequelize.STRING,
  },

});

connection.sync();
