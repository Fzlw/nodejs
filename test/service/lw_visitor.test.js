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
			UserTypeId: "Ctzrqdy7COE0Cm", 
			Name: "6zOsWKfgZHA2o14cv6ogc0bvzey773DslBHxGnE9agN6NYRWVSnO37hCyOgZbipMtJc", 
			Mobile: "4SrSt", 
			Sex: "l", 
			Province: "CDB3j1Ve88ekHDoUOnd0qSO1rHSbG7x8F0NtBMs76R5c4JEKW", 
			City: "WYNmKj9nV5ZbNjMrDmli8jnWMMJhEbimChK3XLa0y", 
			LandTime: "Tue Mar 27 2018 18:28:42 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Thu Apr 26 2018 09:00:23 GMT+0800 (CST)", 
			CreatePerson: "RfkSvpc", 
			UpdateTime: "Fri Feb 02 2018 01:30:00 GMT+0800 (CST)", 
			UpdatePerson: "16dqJDMLiFO6Tt8HRZbt3REmoL99ZE26vkPCc1JpHadpGzfP3HUpj8", 

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