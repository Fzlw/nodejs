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
			GameId: "MJo1wrIulDmKu8qttq", 
			VisitorId: "1fcwinRp4xD8W", 
			Score: "yrIw7krvrDPj4vg1dooUhXydKZ1t3wCOnjcXr9xS8BwibeC1Ya8P9o5ZvHvmIedj1ipZrwk63LdEPOcnGwKtmO", 
			Valid: 1, 
			CreateTime: "Thu Mar 29 2018 11:39:23 GMT+0800 (CST)", 
			CreatePerson: "PM8QzMlkbACWxA6RUbi9He", 
			UpdateTime: "Tue Feb 27 2018 21:41:09 GMT+0800 (CST)", 
			UpdatePerson: "UyzLhC9nsoHCqibKv6K0OvIY3rfZybycao8foZL2DmiFm9yMT2iw7b", 

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