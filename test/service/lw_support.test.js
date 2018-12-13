'use strict';

/**
 * lw_support
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_support.js  start...
});

describe('test app/service/lw_support.js', () => {

    it('should create a lw_support entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwSupport.create({
            Id: Id,
			Support: 1, 
			Against: 1, 
			DynamicId: "ISt3nE", 
			VisitorId: "j7rUIK9DTyeA35g31", 
			Valid: 1, 
			CreateTime: "Mon Apr 02 2018 23:32:59 GMT+0800 (CST)", 
			CreatePerson: "lIJToe8N", 
			UpdateTime: "Sun May 27 2018 23:21:57 GMT+0800 (CST)", 
			UpdatePerson: "oTzPbuMqhaJ3XbE1oTdtFpuKU7zbiIfQ0cX6r05LY3KH9QVimyxdsXz", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_support entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwSupport.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_support entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwSupport.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwSupport.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_support entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwSupport.getById(Id);
        const removeEntity = await ctx.service.lwSupport.remove(entity);
        const updateEntity = await ctx.service.lwSupport.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_support entity', async () => {
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
        const entityList = await ctx.service.lwSupport.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_support entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwSupport.getById(Id);
        const result = await ctx.service.lwSupport.delete(entity);

        assert(result === 1);
    })

})