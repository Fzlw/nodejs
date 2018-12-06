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

    // 映射路径
    config.staticPrefix = 'fz';
    config.staticVersion = '0.0.1';

    // egg 静态资源服务
    config.static = {
        prefix: `/${config.staticPrefix}/${config.staticVersion}/`, 
        dir: path.join(appInfo.baseDir || "", 'app/public/build'), 
        dynamic: true,
        preload: false
    }

    // 默认为本地
    config.isOnline = false;

    // cdn地址
    config.cdnHost = {
        local: `//127.0.0.1:7001/${config.staticPrefix}/${config.staticVersion}`,
        online: `//www.fzstudy.top/${config.staticPrefix}/${config.staticVersion}`
    }


    return config;
};