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
			GameId: "dZeR98NiGkzUC", 
			VisitorId: "gBaTRss1", 
			Score: "f4V8YarXv5FwhBElXFW84LKzR", 
			Valid: 1, 
			CreateTime: "Tue Oct 23 2018 20:30:56 GMT+0800 (CST)", 
			CreatePerson: "MsgaeN9a0IRcVM3ne0qrej6xHfzuwkf8wRx12NC", 
			UpdateTime: "Sat Aug 25 2018 10:19:16 GMT+0800 (CST)", 
			UpdatePerson: "VSj8s5BixHRFa80hBvPB5Ff", 

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