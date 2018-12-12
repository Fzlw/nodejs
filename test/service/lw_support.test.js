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
			DynamicId: "7Ciw", 
			VisitorId: "ITW6aVog", 
			Valid: 1, 
			CreateTime: "Sat Aug 04 2018 07:39:52 GMT+0800 (CST)", 
			CreatePerson: "8oRyIuiETr7gBCF8UX8emGSfeSi4g6Sz8emkEhNPNpJ1Lj", 
			UpdateTime: "Fri Nov 23 2018 17:23:53 GMT+0800 (CST)", 
			UpdatePerson: "TAy0UwDujs4S43ZunIT2hvmsVv5NWMOpfFCebz", 

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