'use strict';

const fs = require('fs');

module.exports = app => {
    return {
        schedule: {
            interval: app.config.logClearTime || '1d',
            type: 'all'
        },
        async task(ctx) {
            // ctx.logger.info(app.config.isOnline)
            let dir = app.config.logger.dir;
            fs.unlink(dir, (err) => {
                if (err) {
                    app.logger.error('日志清除错误' + error);
                }
            })
            console.log(app.config.logger.dir)
        }
    }
}