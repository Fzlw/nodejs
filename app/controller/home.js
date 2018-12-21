'use strict';

const Controller = require('egg').Controller;
const {
    regExp
} = require('../enums/regexp');
const moment = require('moment');
const { UserTypeId } = require('../enums/visitor');

class HomeController extends Controller {

    async index() {
        try {
            // 开发阶段，默认登陆
            // this.ctx.session.user = {
            //     Id: '307c06ea-bd53-451b-996e-69e1b6f87454',
            //     Name: 'AAAem0BBB',
            //     Province: '广东省',
            //     City: '深圳市'
            // }
            // this.ctx.ip = '113.97.35.74';

            let user = this.ctx.session.user,
                userId = user.Id,
                navData = {
                    Name: user.Name,
                    Province: user.Province,
                    City: user.City,
                    Today: moment().format('YYYY年MM月DD日')
                };

            // 同步获取我的相关信息 
            let selfData = this.ctx.app.__selfData || {};
            // 数据处理

            await this.ctx.render('home.xtpl', {
                navData,
                selfData
            });
        } catch (err) {
            // 重定向  TODO
            this.ctx.logger.error('controller/home/index?' + this.ctx.session.user.Id + err);
        }
    }

    /**
     * 渲染登陆页面
     * 这里将地理位置保存在session中，就可以只请求一次接口了
     */
    async login() {
        try {
            // 通过IP获得用户地址
            let ip = this.ctx.ip;
            ip = '120.77.222.224'
            if (!ip || ip.length === 0 || !regExp.IPv4.test(ip)) {
                this.ctx.body = "IP地址非法";
                return;
            }

            let position = {
                Province: '',
                City: ''
            };
            let addressEntity = await this.ctx.service.lwWeather.getPositionByIP(ip);
            if (addressEntity && Number(addressEntity.status) === 1 && addressEntity.province &&
                addressEntity.city && addressEntity.adcode) {
                position = {
                    Province: addressEntity.province,
                    City: addressEntity.city
                }
            }
            this.ctx.session.user = position;

            await this.ctx.render('login.xtpl', { 
                UserTypeId
                // on: this.ctx.app.config.logger.clearTime
            });
        } catch (error) {
            this.ctx.logger.error('controller/home/login?' + error);
        }
    }


}

module.exports = HomeController;