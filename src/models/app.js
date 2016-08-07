const sequelize = new Sequelize('appstore2', 'root', {
  host: 'local',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },


});
