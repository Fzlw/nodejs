'use strict';

const Controller = require('egg').Controller;
const { getSameInfoAsArr } = require('../utils/dataFormat');
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
                // Id TODO   由前台传入
                let entity = await this.ctx.service.lwVisitor.createVisitor('3948b600-f346-4eea-bf15-70dead11db86');
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

            // 同步获取我的相关信息  看系统用户Id怎么传入，尽量避免少访问数据库  TODO
            let selfData = {};
            let selfInfo = await this.ctx.service.sysperson.getLast('fd5448b2-bdd9-4e73-ad68-f854b4507e5a');

            if (selfInfo) {
                let ContactWays = getSameInfoAsArr(selfInfo, 'QQ', 'Email', 'GitHub'),
                    Hobbys = getSameInfoAsArr(selfInfo, 'HobbyId', 'HobbyName', 'HobbyImg'),
                    first = selfInfo[0] || {};
                selfData = {
                    MyName: first.Name || '',
                    Province: first.Province || '',
                    City: first.City || '',
                    Introduce: first.Introduce || '',
                    ContactWays: ContactWays,  // 联系方式 Array
                    Hobbys: Hobbys  // 爱好/标签  Array  个人设置标签
                }
            }

            // 数据处理

            await this.ctx.render('home.xtpl', {
                navData,
                selfData
            });
        } catch (err) {
            console.log('app/controller/home/index' + err);
        }
    }

}

module.exports = HomeController;