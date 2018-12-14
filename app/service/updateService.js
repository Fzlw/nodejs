'use strict';

const Service = require('egg').Service;

const {
    getSameInfoAsArr
} = require('../utils/dataFormat');

// 更新服务，更新一系列包括个人信息，不需要经常变的，以及一次性的服务
module.exports = class UpdateService extends Service {

    // 更新个人信息，储存在内存中
    async updateSelfInfo() {
        try {
            let ctx = this.ctx;
            let selfId = ctx.app.config.selfId;
            if (!selfId || selfId.length === 0) {
                ctx.logger.info('个人Id不存在，请核对');
                return;
            }

            let selfInfo = await ctx.service.sysperson.getLast(selfId);
            if (!selfInfo || typeof selfInfo !== 'object' || selfInfo.length === 0) {
                ctx.logger.info('个人信息不存在，请核对数据库信息');
                return;
            }

            let Hobbys = getSameInfoAsArr(selfInfo, 'HobbyId', 'HobbyName', 'HobbyImg'),
                first = selfInfo[0] || {},
                ContactWays = {
                    "QQ": first['QQ'],
                    "Email": first['Email'],
                    "GitHub": first['GitHub']
                };
            let selfData = {
                MyName: first.Name || '',
                Province: first.Province || '',
                City: first.City || '',
                Introduce: first.Introduce || '',
                ContactWays: ContactWays, // 联系方式 Object
                Hobbys: Hobbys // 爱好/标签  Array  个人设置标签
            }

            // 更新个人信息储存在内存中
            ctx.app.__selfData = Object.assign(ctx.app.__selfData || {}, selfData);
        } catch (error) {
            this.ctx.logger.error('service/updateService/updateSelfInfo' + error);
        }
    }

}