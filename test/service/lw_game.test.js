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
			DeveloperId: "dQF0eHs2", 
			Name: "9I0nBjHJoDOVJB6mhqEQk", 
			Icon: "XyOzZZlYG3MaVY9KQqCn7xZ2o", 
			Router: "vDHuObkHZ2nNHtHhJSuiX4Dn9IyjbVzZAw2CX6OK8WvP2bMnxlkrrd0rZ4UPMV1HkKL1jiEVZ3GwO51G2X", 
			PassKey: "9", 
			Sort: 9, 
			Valid: 1, 
			CreateTime: "Fri Jul 13 2018 22:51:07 GMT+0800 (CST)", 
			CreatePerson: "10L62t1ZesYvDm2ezL4eg1yRPTgZpyPGs6locDz7hnY3RmD2Rn56FfXXrZQfzV9Bcpl7IAp", 
			UpdateTime: "Mon Jan 22 2018 22:32:57 GMT+0800 (CST)", 
			UpdatePerson: "L3gMGikpFbSMecqCAOP9sABCC00BteJbQB0", 

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