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
			GroupId: "qzT", 
			Url: "Ghqv4B0b1Yaxih3KqKlMKEUg5pvcscvrP2UI9qc2YtFama9RJYGpuQNtNylSmZCdb88Uw2fIoZfRNkaDPz1RTVHc5VEBRnxN", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Wed Feb 14 2018 20:44:54 GMT+0800 (CST)", 
			EffectiveEndTime: "Fri Apr 06 2018 23:08:47 GMT+0800 (CST)", 
			Sort: 8, 
			Describe: "B", 
			Remark: "44", 
			Valid: 1, 
			CreateTime: "Thu Jan 25 2018 23:18:25 GMT+0800 (CST)", 
			CreatePerson: "SOuA", 
			UpdateTime: "Mon Sep 17 2018 15:37:39 GMT+0800 (CST)", 
			UpdatePerson: "r5Fryy04Bg189k8E", 

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