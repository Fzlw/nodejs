// 获取app实例  https://eggjs.org/zh-cn/core/unittest.html#app
const {
    app,
    mock
} = require('egg-mock/bootstrap');
const fs = require('fs');
const {
    nameTrans
} = require('./utils/nameTrans');
const { getMockData } = require('./utils/getMockData');


const serviceTem = fs.readFileSync('app/auto-template/service/tpl_service.js', 'utf-8');
const serviceTestTem = fs.readFileSync('app/auto-template/service/tpl_service.test.js', 'utf-8');
const serviceSavePath = 'app/service';
const serviceTestTemPath = 'test/service';


before(() => {
    // start...
    if (!fs.existsSync(serviceSavePath)) {
        fs.mkdirSync(serviceSavePath);
    }
    if (!fs.existsSync(serviceTestTemPath)) {
        fs.mkdirSync(serviceTestTemPath);
    }
})


describe('autoCreate by liwei', () => {

    it('create app/service', () => {
        const ctx = app.mockContext(),
            models = app.model.models; // 获取所有model


        if (Object.keys(models).length === 0) throw new Error('app/model noexist file');

        for (let fileName in models) {
            const __servicename__ = nameTrans(fileName, '_', false),
                __ServiceName__ = nameTrans(fileName),
                __tablename__ = fileName;
            
            // 替换service层设置字段并写入
            let newFile = serviceTem.replace(/__ServiceName__/g, __ServiceName__);
            newFile = newFile.replace(/__servicename__/g, __servicename__);
            newFile = newFile.replace(/__tablename__/g, __tablename__);

            fs.writeFileSync(serviceSavePath + '/' + __tablename__ + '.js', newFile);
        }

        // 断言 TODO
    })

    it.only('create test/service', () => {
        const ctx = app.mockContext(),
            models = app.model.models; // 获取所有model


        if (Object.keys(models).length === 0) throw new Error('app/model noexist file');

        for (let fileName in models) {
            const __ServiceName__ = nameTrans(fileName, '_', false),
                __tablename__ = fileName,
                modelName = nameTrans(fileName);

            // 遍历字段名
            let schemas = app.model[modelName].rawAttributes,
                __Entity__ = '',
                __updateField__ = '';
            for (let field in schemas) {
                // Id字段不自动生产
                if (field.toLocaleLowerCase() === "remark") {
                    __updateField__ = 'Reamrk';
                } else if (field.toLocaleLowerCase() === 'createperson') {
                    __updateField__ = 'CreatePerson';
                }
                if (field !== 'Id') {
                    __Entity__ += '\t\t\t' + field + ': ' +  getMockData(schemas[field]) + ', \n';
                }
            }
            
            // 替换test/service层设置字段并写入
            let newFile = serviceTestTem.replace(/__ServiceName__/g, __ServiceName__);
            newFile = newFile.replace(/__updateField__/g, __updateField__);
            newFile = newFile.replace(/__tablename__/g, __tablename__);
            newFile = newFile.replace(/__Entity__/g, __Entity__);

            fs.writeFileSync(serviceTestTemPath + '/' + __tablename__ + '.test.js', newFile);
        }

        // 断言 TODO
    })

})