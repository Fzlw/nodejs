'use strict';

/**
 * lw_comment
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_comment.js  start...
});

describe('test app/service/lw_comment.js', () => {

    it('should create a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.create({
            Id: Id,
			DynamicId: "YO7FAOSmscAzltLWM", 
			Comment: "L9sDOusXS4rsdSmqHjdnYt9b2CMj3TGRPteSOmDfAxf44xC8GC7fJUdJSRWc", 
			Position: "o0HSicc1Y6lGzRmOigASFRURf2RvnBezzSl3UFC8lVvRkz1S3NJzAE8nSLtCCwhgjX3q40ox", 
			VisitorId: "dX0tYqTPhmaHdKt", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Tue Feb 27 2018 10:48:32 GMT+0800 (CST)", 
			CreatePerson: "P", 
			UpdateTime: "Wed Oct 10 2018 16:04:24 GMT+0800 (CST)", 
			UpdatePerson: "0w1a2bBbcrSvAFAzazpLqFhkbdwwa9LXP3rkicwTv", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwComment.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwComment.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const removeEntity = await ctx.service.lwComment.remove(entity);
        const updateEntity = await ctx.service.lwComment.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_comment entity', async () => {
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
        const entityList = await ctx.service.lwComment.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const result = await ctx.service.lwComment.delete(entity);

        assert(result === 1);
    })

})