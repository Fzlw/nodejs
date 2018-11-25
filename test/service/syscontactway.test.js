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
			UserId: "186q7bv6VOCfXDd5", 
			QQ: "KSopxG", 
			Email: "qHxo9jqZZs", 
			WeChat: "8JLlrX1nwf", 
			Valid: 1, 
			CreateTime: "Fri Nov 02 2018 23:50:45 GMT+0800 (CST)", 
			CreatePerson: "3vTmiXZlWqI2VFOBdGAyGSL", 
			UpdateTime: "Sat Mar 24 2018 23:27:26 GMT+0800 (CST)", 
			UpdatePerson: "7vhm9YvZwYZbVnP6OCSnVv8X7f9vFMGnTjUFk03wy3KMulyTorr9W58uJEcDI", 

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