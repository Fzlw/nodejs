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
			UserId: "JmcmIaBrbK7qSvr", 
			QQ: "zDUVM94h", 
			Email: "xMPLbqtzoHXVkwFUqDkzhiu06GhcTreW7glNDZu8Kt6xsCCfLjce7O85bgSDb9Bz7wJU4Gw95dmDadClhTNKBr", 
			WeChat: "q", 
			SinaBlog: "QCIyPFLLzuXK64GW0Y0pW5bg4vmC21sG6AJQfKuAtinT611p", 
			BiliBili: "WCUiZOq3kxisD64MvU4zuli446FQBO3NdbVUiM7kKlgRzDCa", 
			GitHub: "WYIWZwgNTOoMQhFUPyKYlP39IubwzKqLukf5RzF08lndqhr8qPngx2L5aPDiJ9", 
			Valid: 1, 
			CreateTime: "Thu Jun 21 2018 19:39:13 GMT+0800 (CST)", 
			CreatePerson: "zSvZ7A3VqWZGtNGiiBOm7ijz0GXH0N6qpGuLZ5h7vHhQLXiX9L7", 
			UpdateTime: "Wed Oct 03 2018 03:13:46 GMT+0800 (CST)", 
			UpdatePerson: "Q5FOgsH75Wq7ciIqhT0NmaZ1oWagZ", 

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