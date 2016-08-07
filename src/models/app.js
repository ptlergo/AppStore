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
      }
    },
  },

});

// Sync database. Promise to log any errors to console
connection.sync()
  .then(() => { console.log('sequelize sync successful'); })
  .then(() => {
    return App.create({
      title: 'title test 2',
      releaseDate: 'aug 12',
    });
  })
  .catch((error) => { console.log(error); });
