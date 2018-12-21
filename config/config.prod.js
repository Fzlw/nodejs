'use strict';
const path = require('path');

module.exports = appInfo => {
    return {
        isOnline: true,
        // 线上日志配置，位于项目nodejs下
        logger: {
            dir: path.join(__dirname, '../')
        }
    }
}