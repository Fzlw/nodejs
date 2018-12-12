'use strict';

/**
 * test_banner
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/test_banner.js  start...
});

describe('test app/service/test_banner.js', () => {

    it('should create a test_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.testBanner.create({
            Id: Id,
			remark: "cW", 
			img: "ddQ2Cls0moAhVnSmQJM5e1gRqkAqplxeMLPD3DzWNZ0iIPOphaKcf", 
			createTime: "Wed Nov 14 2018 12:57:30 GMT+0800 (CST)", 
			updateTime: "Mon Oct 01 2018 10:35:54 GMT+0800 (CST)", 

        });
        assert(entity.Id === Id);
    })

    it('should get a test_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.testBanner.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a test_banner entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.testBanner.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.Reamrk = 'anto-update value';
        const newEntity = await ctx.service.testBanner.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a test_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.testBanner.getById(Id);
        const removeEntity = await ctx.service.testBanner.remove(entity);
        const updateEntity = await ctx.service.testBanner.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of test_banner entity', async () => {
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
        const entityList = await ctx.service.testBanner.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a test_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.testBanner.getById(Id);
        const result = await ctx.service.testBanner.delete(entity);

        assert(result === 1);
    })

})