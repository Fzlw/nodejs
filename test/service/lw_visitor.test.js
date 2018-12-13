'use strict';

/**
 * lw_visitor
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor.js  start...
});

describe('test app/service/lw_visitor.js', () => {

    it('should create a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.create({
            Id: Id,
			UserTypeId: "3qAa", 
			Name: "V9VqeWkqbyG9Pp3qXSY2m1RJI9UnnJUVzRjkm5AR2FjykcfsFyXR8bEVruPZuC1X", 
			Mobile: "1e7pP", 
			Sex: "4", 
			Province: "Kd6IqD93AGyuAL0LRcmAefGGwo5m5Xns88MHwmpnHyKL9AAmIJMKzuwiQSVFJRu", 
			City: "ATRKvOJyNCHK3HQeb9avz", 
			LandTime: "Wed Oct 10 2018 09:13:06 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Thu Sep 27 2018 09:01:56 GMT+0800 (CST)", 
			CreatePerson: "lv", 
			UpdateTime: "Sun Feb 25 2018 03:49:07 GMT+0800 (CST)", 
			UpdatePerson: "2sv5lqs9aBGNnxlEbL8cbGb7SDZ64AiucA", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitor.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitor.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        const removeEntity = await ctx.service.lwVisitor.remove(entity);
        const updateEntity = await ctx.service.lwVisitor.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor entity', async () => {
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
        const entityList = await ctx.service.lwVisitor.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        const result = await ctx.service.lwVisitor.delete(entity);

        assert(result === 1);
    })

})