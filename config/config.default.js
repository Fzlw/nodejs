'use strict';

const sequelizeDefault = require('./sequelize.config');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = "my_service" + '_18-11-06';

  // add your config here
  config.middleware = [];

  // sequelize
  config.sequelize = sequelizeDefault;


  return config;
};
