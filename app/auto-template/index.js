// 获取app实例  https://eggjs.org/zh-cn/core/unittest.html#app
const {
    app,
    mock
} = require('egg-mock/bootstrap');
const fs = require('fs');



const serviceTem = fs.readFileSync('./service/tpl_service.js', 'utf-8');
const serviceSavePath = '../service';




before(() => app.ready());


describe('should get a app', () => {

    it('get a app', async () => {
        console.log(app)
    })

})