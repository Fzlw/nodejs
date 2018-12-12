'use strict';

/**
 * lw_game
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_game.js  start...
});

describe('test app/service/lw_game.js', () => {

    it('should create a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.create({
            Id: Id,
			DeveloperId: "e1JPpB7xAhJ", 
			Name: "rYijGZAScf2u0b", 
			Icon: "SbJEfMDMyZC14yT77DFdvdaaQFCT2TV7MEDFnZSr8eMRAFOf79h5H61riKsPu38sZRMDP", 
			Router: "MxzDZKE2ZWp6fLJk2ysx01EXlhJ8Qg2WW7u3hn1j9LFzEPpsUXu3fsGSasnbGvFZ0ZU2QJj0f", 
			Sort: 2, 
			Valid: 1, 
			CreateTime: "Fri Jul 20 2018 09:55:15 GMT+0800 (CST)", 
			CreatePerson: "ss1RjbE0VRNLmIsUwHQgugoYA1SQe4tJb1DVh5c69Nj1eQjJz6k6oNhiYdNtQW8VPS2eo", 
			UpdateTime: "Wed May 09 2018 18:53:20 GMT+0800 (CST)", 
			UpdatePerson: "cGgrjpGAPeBVJMu1uGa4lsgdA8aM0KQIOngUBQUIyyw1pfDK3U1HWd0jGATvJ2DWsXrGXlJDUHXRufq", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_game entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwGame.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwGame.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const removeEntity = await ctx.service.lwGame.remove(entity);
        const updateEntity = await ctx.service.lwGame.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_game entity', async () => {
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
        const entityList = await ctx.service.lwGame.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const result = await ctx.service.lwGame.delete(entity);

        assert(result === 1);
    })

})