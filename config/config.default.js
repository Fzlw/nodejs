'use strict';

const sequelizeDefault = require('./sequelize.config');
const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = "my_service" + '_18-11-06';

    // add your config here
    config.middleware = [];

    // sequelize
    config.sequelize = sequelizeDefault;

    // xtpl
    config.view = {
        defaultViewEngine: "xtpl",
        defaultExtension: ".xtpl"
    }

    config.staticPrefix = 'fz';
    config.staticVersion = '0.0.1';

    // egg 静态资源服务
    config.static = {
        prefix: `/${config.staticPrefix}/${config.staticVersion}/`, 
        dir: path.join(appInfo.baseDir, 'app/public/src'), 
        dynamic: true,
        preload: false
    }


    return config;
};