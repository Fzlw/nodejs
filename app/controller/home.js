'use strict';

const Controller = require('egg').Controller;

const { UserType } = require('../enums/visitor');
const moment = require('moment');

class HomeController extends Controller {
    async index() {
        let UserId = this.ctx.session.user.Id,
            navData = {
                Name: this.ctx.session.user.Name,
                Today: moment().format('YYYY年MM月DD日')
            };
        
        try {
            if (!UserId || UserId.length === 0) {
                let entity = await this.ctx.service.lwVisitor.createVisitor(UserType.visitor);
                if (!entity) {
                    this.ctx.redirect('/error/404');
                    return;
                }
                // 保存用户状态
                this.ctx.session.user = {
                    Id: entity.Id,
                    Name: entity.Name
                };
                // 写入navData
                navData.Name = entity.Name;
            }

            // 数据处理

            await this.ctx.render('home.xtpl', { navData });
        } catch (err) {
            console.log('app/controller/home/index' + err);
        }
    }

}

module.exports = HomeController;