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
			DeveloperId: "rUaQKFqvH6fS", 
			Name: "GJ8", 
			Icon: "aDBxus", 
			Router: "FIj2F6M2EdZNPysnSgvKwal3dnCz7abIxLIB08rsCDZ2hAmz5kbRI", 
			Sort: 4, 
			Valid: 1, 
			CreateTime: "Thu Jul 12 2018 01:03:28 GMT+0800 (CST)", 
			CreatePerson: "rNQ37KPDqaqaaNFfChpzjiPnPZLl1l1cmfAFZDAeoqmPTEMI0dFQVadlfh", 
			UpdateTime: "Thu Feb 15 2018 16:36:17 GMT+0800 (CST)", 
			UpdatePerson: "P6fvBZg9NsQHUBdQa7MugyA1bqnKj4rR4GFLc9uIPVhmKp87h3ZzkBG4xBveHE7ZaTOrAufQExuiMU3Fjg", 

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