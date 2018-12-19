'use strict';

module.exports = (options, app) => {
    return async function (ctx, next) {
        try {
            let user = ctx.session.user;
            if (!user || !user.Id || user.Id.length === 0) {
                ctx.redirect('/login');
            } else {
                await next();
            }
        } catch (error) {
            // 只要有错误线上环境就不推送具体原因
            let msg = 'Internal Server Error';
            if (app.config.env === 'prod') {
                ctx.body = msg;
                return;
            }
            ctx.body = JSON.stringify(error);
        }
    }
}