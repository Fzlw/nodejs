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
			GroupId: "ORe", 
			Url: "XG4ZLWMqQBeot29zawJisiaWiAHxStzaDd8I4auvIgccPE", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Fri Nov 23 2018 04:38:11 GMT+0800 (CST)", 
			EffectiveEndTime: "Fri Dec 29 2017 09:49:31 GMT+0800 (CST)", 
			Sort: 10, 
			Describe: "yz6vfcAMNoouwirPR", 
			Remark: "3FjnNaV4V4pdr", 
			Valid: 1, 
			CreateTime: "Tue Oct 23 2018 05:12:19 GMT+0800 (CST)", 
			CreatePerson: "cLaBl9lL7qn0U16WWY7Qx5L9xHjOU1Pjx3jM7NrIPfBeh7jvFIfbubvfsoxK3ZbWdNembZwBLbUWTghBm7fXXt70J", 
			UpdateTime: "Fri Feb 02 2018 09:32:32 GMT+0800 (CST)", 
			UpdatePerson: "XCXiVyzLJawvH7Fw", 

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