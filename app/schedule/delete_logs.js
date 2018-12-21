'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

module.exports = app => {
    return {
        schedule: {
            interval: app.config.logger.clearTime || '10s',
            type: 'all'
        },
        async task(ctx) {
            let isOnline = app.config.isOnline;
            // 线上就定期清除日志
            if (!isOnline) return;
            let dir = app.config.logger.dir;
            // 使用命令行清除日志
            exec(`rm -rf ${dir}`, (error, stdout, stderr) => {
                if (error) {
                    app.logger.warn('WARNNING!!!!  日志清除错误' + err);
                    return;
                }
                app.logger.info('\r----日志清除成功-----\r' + new Date());
            })
            // 非法操作
            // fs.unlink(dir, (err) => {
            //     if (err) {
            //         app.logger.error('日志清除错误' + err);
            //         return;
            //     }
            //     app.logger.error('日志清除成功' + new Date());
            // })
        }
    }
}