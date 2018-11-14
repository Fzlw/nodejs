'use strict';

const Controller = require('egg').Controller;

class Test extends Controller {
  // 获取所有的图片，api
    async getImgs() {
        let result = {
            success: false,
            message: "",
            code: -1,
            data: null,
            count: 0
        }

        try {
            const imgs = await this.ctx.model.TestBanner.findAll();
            if (!imgs) {
                result.message = '没有图片';
                result.code = 30001;
                this.ctx.body = result;
                return;
            }
            result.success = true;
            result.message = 'success';
            result.code = 20000;
            result.data = imgs;
            result.count = imgs.length;
        } catch (err) {
            result.message = "获取资源出错，刷新";
            result.code = 30009;
            console.log('controller/home/getImgs' + err);
        }
        this.ctx.body = result;
    }
}

module.exports = Test;
