'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let env = await this.app.config.env;
        await this.ctx.render('home.xtpl', { env });
    }
}

module.exports = HomeController;