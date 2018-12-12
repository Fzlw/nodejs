'use strict';

const Controller = require('egg').Controller;

const {
    UserType
} = require('../enums/visitor');
const moment = require('moment');

class HomeController extends Controller {
    async index() {
        try {
            let user = this.ctx.session.user,
                UserId = user && user.Id ? user.Id : '',
                navData = {
                    Name: user && user.Name ? user.Name : '',
                    Today: moment().format('YYYY年MM月DD日')
                };
            // 建立游客入口
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

            // 同步获取我的相关信息
            let selfData = {};
            let selfInfo = await this.ctx.service.sysperson.getLastOne();
            if (selfInfo) {
                selfData = {
                    MyName: selfInfo.Name,
                    City: selfInfo
                }
            }

            // 数据处理

            await this.ctx.render('home.xtpl', {
                navData
            });
        } catch (err) {
            console.log('app/controller/home/index' + err);
        }
    }

}

module.exports = HomeController;