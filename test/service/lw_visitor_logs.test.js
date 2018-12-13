'use strict';

/**
 * lw_visitor_logs
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_logs.js  start...
});

describe('test app/service/lw_visitor_logs.js', () => {

    it('should create a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.create({
            Id: Id,
			UserId: "I5GH3DirL0vWUv", 
			IP: "meSuNJ2Td8vp", 
			LandTime: "Thu Mar 22 2018 16:04:42 GMT+0800 (CST)", 
			Province: "mO2NlEldFzhqK0jgpM8zQ0KiS3MjFqz7whnyo2CHQmHmkPcprjLMw0mXAeB5ZNari7glCGNcuNi5UCuHGxaKjKOQLEAyF5D", 
			City: "YkYMY8MwYe4GZqzxA8Kgm8ZeulTjtKUENJTOu5BVtRapTgRDUYTzcF3EqPeor", 
			UserAgent: "iMBbgUHYgenM0xeUQ3OYIjZhkvqAvggFmVh4tppMnF9GHspCHQdOPE0TViTTU8CUmpjkXWGHYQbgGeUazLLZJ1rtUb7gDSa9DbVOYjiKBZ5aDFbz4o44D6xOHAzHelqk3nKjrbfIjH4ARiFMZgi31H0jMF9xiaefiCXE3asPG93Ca1gfnKJ0iyLuYPrUwqLOU657N5shaROtd0UutmRlXvcf75tzFnPwu2X8j5iH6YEG3UgC7yL57dXGIb6Sj4N9ER6SFZTdwOvg8bWJxMjZ0RgjEQ1ZyYC7BS3g3oaCkbt9o8NBhX9UfWByRtlX9F4Wz8KJbKOO4EJ1E8KHeOBo", 
			WebBrowser: "iMHUlFq84PI0yGBCeS4JNYd", 
			WebBrowserVersion: "GGp8uSP2n", 
			Valid: 1, 
			CreateTime: "Tue Dec 04 2018 10:05:22 GMT+0800 (CST)", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity. = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorLogs.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const removeEntity = await ctx.service.lwVisitorLogs.remove(entity);
        const updateEntity = await ctx.service.lwVisitorLogs.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_logs entity', async () => {
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
        const entityList = await ctx.service.lwVisitorLogs.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const result = await ctx.service.lwVisitorLogs.delete(entity);

        assert(result === 1);
    })

})