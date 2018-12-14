'use strict';

/**
 * lw_imgs
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_imgs.js  start...
});

describe('test app/service/lw_imgs.js', () => {

    it('should create a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.create({
            Id: Id,
			GroupId: "3NuJcUom3dPS1jK0", 
			Url: "TvE", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Thu Jun 14 2018 14:55:49 GMT+0800 (CST)", 
			EffectiveEndTime: "Tue Sep 11 2018 02:11:53 GMT+0800 (CST)", 
			Sort: 2, 
			Describe: "is2M", 
			Remark: "NmQx2QA", 
			Valid: 1, 
			CreateTime: "Tue Dec 26 2017 16:52:00 GMT+0800 (CST)", 
			CreatePerson: "tJyFk7dw4CjpgUG8HnD6zwAXM", 
			UpdateTime: "Tue Jan 09 2018 20:30:52 GMT+0800 (CST)", 
			UpdatePerson: "LugQISTbQ1optZG0kywfbMv0Ev0mmJV1FRgjYBIdK560JNVj56Q8dJzJg6NGczXZdq2hXi0T2YFMwOp", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwImgs.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwImgs.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        const removeEntity = await ctx.service.lwImgs.remove(entity);
        const updateEntity = await ctx.service.lwImgs.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_imgs entity', async () => {
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
        const entityList = await ctx.service.lwImgs.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        const result = await ctx.service.lwImgs.delete(entity);

        assert(result === 1);
    })

})