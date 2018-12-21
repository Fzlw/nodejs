'use strict';
const path = require('path');

module.exports = appInfo => {
    return {
        isOnline: true,
        // 线上日志配置，位于项目nodejs下
        logger: {
            dir: path.join(__dirname, `../../logs/${appInfo.name}`),
            clearTime: 1 * 24 * 60 * 60    // 定时清除日志  默认1天 单位s  自定义属性
        }
    }
}