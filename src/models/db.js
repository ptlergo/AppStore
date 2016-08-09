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

// Define extensiveable User table
const User = connection.define('user', {
  name: {
    // Only one unique title and no empty title fields specified
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 255],
        msg: 'Enter a name with at least 1 characters but less than 255',
      },
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: {
        args: [1, 255],
        msg: 'Enter a nummeric age',
      },
    },
  },
});// End of User table

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
    defaultValue: 'default app description',
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

// Define extensiveable Art asset table
const ArtAsset = connection.define('artasset', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 255],
        msg: 'Enter an art title with at least 2 characters but less than 255',
      },
    },
  },
  srcLink: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 255],
        msg: 'Enter an art title with at least 2 characters but less than 255',
      },
    },
  },
});// End of Artasset table

// Table join for an app that will have multiple users
App.hasMany(User, {
  foreignKey: 'appId',
});

// Table join for an app that will have multiple art assets
App.hasMany(ArtAsset, {
  foreignKey: 'appId',
});

// Define extensiveable Art table

// Sync database. Promise to log any errors to console
connection.sync()
  .then(() => {})
  .catch((error) => { console.log(error); });

exports.connection = connection;

exports.app = App;
exports.user = User;
exports.artasset = ArtAsset;
