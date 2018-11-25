'use strict';

const Controller = require('egg').Controller;

module.exports = class Help extends Controller {
    async help() {
        await this.ctx.render('help/404.xtpl')
    }
}