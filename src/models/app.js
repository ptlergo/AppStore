const Sequelize = require('sequelize');

// Call constructor function to create new object
const connection = new Sequelize('appstore2', 'root');

// Define App model
const App = connection.define('app', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  releaseDate: Sequelize.STRING,

});
connection.sync();
console.log('worked');
