'use strict';

/**
 * lw_dynamic_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_journey.js  start...
});

describe('test app/service/lw_dynamic_journey.js', () => {

    it('should create a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.create({
            Id: Id,
			StartTime: "Wed Jun 27 2018 06:58:21 GMT+0800 (CST)", 
			EndTime: "Wed Dec 27 2017 08:32:38 GMT+0800 (CST)", 
			PointOfStart: "wqC", 
			PointOfEnd: "U8csTunuRDxbbmej7gkkcYkvp6sCF3hAaKhqC3iw", 
			ImgGroupId: "URIBl4Ak697GLHyy", 
			Describe: "vYKhqoo7RA3eAydaLFXvTEfzY590UhUQferIZmOhpEVILjbFtOmT7JHnSNyMyTwwxghhRGbNoGs3daKuSIX1wQoeqgBEs6Tr2db1RfkL9CfqQlfuTlqxgrYWxEihoKRiZqzcjiVHn3IoyJpe0l9gQPuACbbhugAniukmSja2DKX8KVa975Dzw2YMfC8dkwaPA75G32IQ4s6qa0b9fIzx32oEl97fZoa3Lq07aajE00mrT5T9PmpkA5AOM7YYA9Sn3KZl3DstJkwlkCuixesdOKKHWxiP6PYEEH8keKsvIuXvuN2MXYLvbXgrKRer0hxquzTUb7FFol0yo9ya5iPzUvGXUa9d66", 
			Remark: "S", 
			Valid: 1, 
			CreateTime: "Sat Mar 31 2018 12:33:00 GMT+0800 (CST)", 
			CreatePerson: "yDV6J4EfFlldkxPhS9EuSDordyVoev5R3H0Zp4woh9rV7U1wqtRUksPd", 
			UpdateTime: "Sat Oct 27 2018 00:19:08 GMT+0800 (CST)", 
			UpdatePerson: "mUtGX3ZJFJahEVwxVJ1BCXmDWCREuZn4Bgj0GVeSxyW3zgNnT0fJsYTIIoCl", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const removeEntity = await ctx.service.lwDynamicJourney.remove(entity);
        const updateEntity = await ctx.service.lwDynamicJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_journey entity', async () => {
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
        const entityList = await ctx.service.lwDynamicJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const result = await ctx.service.lwDynamicJourney.delete(entity);

        assert(result === 1);
    })

})