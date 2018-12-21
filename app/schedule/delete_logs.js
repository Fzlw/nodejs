'use strict';

const fs = require('fs');

module.exports = app => {
    return {
        schedule: {
            interval: app.config.logger.clearTime || '100d',
            type: 'all'
        },
        async task(ctx) {
            let isOnline = app.config.isOnline;
            // 线上就定期清除日志
            if (!isOnline) return;
            // ctx.logger.info(app.config.isOnline)
            let dir = app.config.logger.dir;
            fs.unlink(dir, (err) => {
                if (err) {
                    app.logger.error('日志清除错误' + err);
                    return;
                }
                app.logger.error('日志清除成功' + new Date());
            })
        }
    }
}