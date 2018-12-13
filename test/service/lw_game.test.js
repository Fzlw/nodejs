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
			DeveloperId: "xI0dPDZ7iYmZBwymqq", 
			Name: "6bLW", 
			Icon: "bHEQBE4Rz", 
			Router: "CbeOiKrVP2MYWnDeifzIWV5N7rFcKQIc1R9IOK87RgaxLIZl7eGl8Njbso0zCD0qRExfk6csRPw8P9meNv", 
			PassKey: "B", 
			Sort: 5, 
			Valid: 1, 
			CreateTime: "Mon Jan 15 2018 22:45:10 GMT+0800 (CST)", 
			CreatePerson: "Mr03Oh0T726oFx3rHWz0RuE6SU42fLrGEksuu9kriz9qqYW37I0r4dJ8fJ43zu6BTd6V", 
			UpdateTime: "Mon May 21 2018 17:13:45 GMT+0800 (CST)", 
			UpdatePerson: "KVNLS4NcvpU", 

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