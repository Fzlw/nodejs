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
			Name: "a0Qc9dkR", 
			Sex: "P", 
			LandTime: "Wed Mar 07 2018 04:49:55 GMT+0800 (CST)", 
			Position: "iXvGgZyv48NNXM8iv2bdnAzHA5fFpwGDYkRoLzVY53R8LHvHCo5Xfnojy8jJ7Xeif0k0lDNlN", 
			Valid: 1, 
			CreateTime: "Tue Mar 06 2018 17:41:35 GMT+0800 (CST)", 
			CreatePerson: "4X60jXwdBEWkOHfpUOffj8FbQv", 
			UpdateTime: "Sat Jan 20 2018 01:49:19 GMT+0800 (CST)", 
			UpdatePerson: "27T", 

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