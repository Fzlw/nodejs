'use strict';

/**
 * lw_visitor_type
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_type.js  start...
});

describe('test app/service/lw_visitor_type.js', () => {

    it('should create a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.create({
            Id: Id,
			Name: "U2qVaY5IHhSjnVL7Fc34UoDGmakt9mVZpNUoGokyy8BedJtxzQhdelER9eCOEuKbOhkp6py", 
			Prefix: "8J", 
			Suffix: "6iXh", 
			MaxLen: 2, 
			FillByte: "5NJYg", 
			Remark: "g20R5edlPV6eOJnUxdzu7iomF0JsUoiFR80SLkp8WlErXRbBRg4PCnNm9xgvRMp7qBC5qlOqW", 
			Valid: 1, 
			CreateTime: "Fri Nov 30 2018 17:53:06 GMT+0800 (CST)", 
			CreatePerson: "GD25O6OALJXgo1tIu6HzWwP0tEa6hFtgHhb4s3YBcAOa7cnHbtXw3WHLcbose8", 
			UpdateTime: "Thu Dec 14 2017 19:03:25 GMT+0800 (CST)", 
			UpdatePerson: "Nl31tzScS3my7WCR25C3pqAwm1h2DaeSdEJaaqrdtlGKtfuJHswmVglcz7NSGNXAGoSw9TEr28E", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorType.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorType.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const removeEntity = await ctx.service.lwVisitorType.remove(entity);
        const updateEntity = await ctx.service.lwVisitorType.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_type entity', async () => {
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
        const entityList = await ctx.service.lwVisitorType.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const result = await ctx.service.lwVisitorType.delete(entity);

        assert(result === 1);
    })

})