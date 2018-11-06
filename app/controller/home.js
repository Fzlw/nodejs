'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Welcome to here, my name is liwei';
  }
}

module.exports = HomeController;
