'use strict';

/**
 * syscontactway
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/syscontactway.js  start...
});

describe('test app/service/syscontactway.js', () => {

    it('should create a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.create({
            Id: Id,
			UserId: "z6uS0w0P", 
			QQ: "NEY", 
			Email: "kUZFLXxDV0MuLt3q7HSwJY4znw4IXh0PXSQDYgEZzRPK8hvqovAHJNT8bs", 
			WeChat: "0pX2uRKQL", 
			SinaBlog: "l6rb8gsTKf0X5PEn1md6w8pnyfrVXfDfRXVr47dF605xuJMA9XpoL6hADUF6dJEB6CeCTxf0w3TeBXoSxJibn", 
			BiliBili: "Vef1Ame7zJcguRpQuRHubZZutBLdPjoS0Eo9sT", 
			GitHub: "34PABwdSdfyOKVs6jr5zI0zldjXWyoU4byGyhALrTx9gi3Sip9XgNcNZHF0Rs04504EjIDDlqPpLH", 
			Valid: 1, 
			CreateTime: "Wed Jul 25 2018 06:20:48 GMT+0800 (CST)", 
			CreatePerson: "zkzbbVw3JvAs8g11cf2IegMnOeo9eFhVw05XJjKQ0VbOU5ZdX6", 
			UpdateTime: "Sat Oct 06 2018 12:13:21 GMT+0800 (CST)", 
			UpdatePerson: "ZcsOADPqrjHYXNTZMHvhk6h", 

        });
        assert(entity.Id === Id);
    })

    it('should get a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.syscontactway.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.syscontactway.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        const removeEntity = await ctx.service.syscontactway.remove(entity);
        const updateEntity = await ctx.service.syscontactway.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of syscontactway entity', async () => {
        const ctx = app.mockContext();

        const pagination = {
                current: 1,
                pageSize: 10
            },
            where = {
                Valid: {
                    $gte: 0
                }
            };
        const entityList = await ctx.service.syscontactway.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        const result = await ctx.service.syscontactway.delete(entity);

        assert(result === 1);
    })

})