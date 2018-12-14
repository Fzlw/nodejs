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
			DynamicId: "PA", 
			VisitorId: "3i7mQY8fQTUK6d2z", 
			Valid: 1, 
			CreateTime: "Tue Aug 28 2018 18:02:48 GMT+0800 (CST)", 
			CreatePerson: "yrDbljbNr65EQiNwiJcqHDxJ0Id5397VrdnbyGKLrHw77FcBV2SqNTKQtiZLF", 
			UpdateTime: "Sat Jun 30 2018 21:44:25 GMT+0800 (CST)", 
			UpdatePerson: "lmXrWSnjHXVWxBT1TdCao2CGNR4xWHGRjdIx93WJmxApVyEn0uCdZB8iXXGsVqRSJ65a7gDxE7sF8aBvRq4oTM", 

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