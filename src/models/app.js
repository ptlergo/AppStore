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
    defaultValue: 'description of app',
  },
  releaseDate: {
    type: Sequelize.STRING,
  },

});

// Sync database. Promise to log any errors to console
connection.sync()
  .then(() => { console.log('sequelize sync successful'); })
  .catch((error) => { console.log(error); });
