// 获取app实例  https://eggjs.org/zh-cn/core/unittest.html#app
const {
    app,
    mock
} = require('egg-mock/bootstrap');
const fs = require('fs');
const {
    nameTrans
} = require('./utils/nameTrans');


const serviceTem = fs.readFileSync('app/auto-template/service/tpl_service.js', 'utf-8');
const serviceSavePath = 'app/service';


before(() => {
    // start...
    if (!fs.existsSync(serviceSavePath)) {
        fs.mkdirSync(serviceSavePath);
    }

})


describe('autoCreate by liwei', () => {

    it('get all models', () => {
        const ctx = app.mockContext(),
            models = app.model.models; // 获取所有model


        if (Object.keys(models).length === 0) throw new Error('app/model noexist file');

        for (let fileName in models) {
            const __servicename__ = nameTrans(fileName),
                __ServiceName__ = __servicename__ + 'Service',
                __tablename__ = fileName;
            
            let newFile = serviceTem.replace(/__ServiceName__/g, __ServiceName__);
            newFile = newFile.replace(/__servicename__/g, __servicename__);
            newFile = newFile.replace(/__tablename__/g, __tablename__);

            fs.writeFileSync(serviceSavePath + '/' + __tablename__ + '.js', newFile);
        }

        // 断言 TODO
    })

})