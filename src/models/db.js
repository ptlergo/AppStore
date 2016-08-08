const Sequelize = require('sequelize');

require('dotenv').config();
// Call constructor function to create new object
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Define extensiveable App table
const App = connection.define('app', {
  title: {
    // Only one unique title and no empty title fields specified
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [2, 255],
        msg: 'Enter a title with at least 2 characters but less than 255',
      },
    },
  },
  description: {
    type: Sequelize.STRING,
    defaultValue: 'description of app',
  },
  releaseDate: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [5, 255],
        msg: 'Enter a release date with at least 5 characters but less than 255',
      },
    },
  },
});// End of App table

// Define extensiveable User table

// Define extensiveable Art table

// Sync database. Promise to log any errors to console
connection.sync()
  .then(() => { console.log('sequelize sync successful'); })
  .catch((error) => { console.log(error); });

exports.connection = connection;

exports.app = app;
