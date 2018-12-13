'use strict';

/**
 * lw_game_record
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_game_record.js  start...
});

describe('test app/service/lw_game_record.js', () => {

    it('should create a lw_game_record entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGameRecord.create({
            Id: Id,
			GameId: "rRy2HuISrya", 
			VisitorId: "ac4CyCimPP", 
			Score: "kbYaCIOleSKOcpOLSanil123Nw93S6gUE", 
			Valid: 1, 
			CreateTime: "Sun May 06 2018 09:27:40 GMT+0800 (CST)", 
			CreatePerson: "IxXWVdPCyQGELDLZdMXT2qZy2eXUWf70tNxJu3vXO2WU7H57j6zimdwEe4Tja8NLB3MsvkEhKovknLOSoZ", 
			UpdateTime: "Sat Oct 27 2018 21:41:23 GMT+0800 (CST)", 
			UpdatePerson: "Cu5HEsw8A2Y8cBoI", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_game_record entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGameRecord.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_game_record entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwGameRecord.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwGameRecord.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_game_record entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGameRecord.getById(Id);
        const removeEntity = await ctx.service.lwGameRecord.remove(entity);
        const updateEntity = await ctx.service.lwGameRecord.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_game_record entity', async () => {
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
        const entityList = await ctx.service.lwGameRecord.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_game_record entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGameRecord.getById(Id);
        const result = await ctx.service.lwGameRecord.delete(entity);

        assert(result === 1);
    })

})