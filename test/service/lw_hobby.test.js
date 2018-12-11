'use strict';

/**
 * lw_hobby
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby.js  start...
});

describe('test app/service/lw_hobby.js', () => {

    it('should create a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.create({
            Id: Id,
			Name: "e7mcI96kX3Uotzo", 
			Describe: "799Q5Gu54imKZVIjvhJfYs3hVJA4keLpPHAYpEdduB8xiG5QxWdzS2EHGB8EYpF6ANmBUB4RCMNeYmr4J7YKtmLztJUII7cHuSFEbsYEa2xBwc96iXCLkoSH53PSlpkJAv6z0n8bW109ory5ARTnJibieOHWqAASPD9VVBDEIA7OwHvWhxq0HRopzg5eFoaYPALWb3NhyrQcI69p4YYndb71GzQlMhrbFp5ypSSkqpK3XAaBrGMKFBa6sgD8mzvdci5m06jaZ3GDz2FgjcR5z4jqkLpdqk2SgLiTDQvYbMsNavOF25xdGO7j1hoVSWo9bWmZeI7Ip9XQXctogebpq10dYsZk7sdDHBB85n1sJyZB1yet1PDtR3vBilduMaBwTV5gAMEVzTqN4iXDSTIOkv52WBjFcupyF9NhIDxPsebiiS5q6GlzitaHyPfpsJXA", 
			Sort: 10, 
			Valid: 1, 
			CreateTime: "Sun Oct 21 2018 13:05:35 GMT+0800 (CST)", 
			CreatePerson: "O1xHBYU0NjHW7ewdHbQanZvTslB4Kf0FFM5hZjcEMgKtUO0mWUo911V6", 
			UpdateTime: "Thu Nov 22 2018 22:05:30 GMT+0800 (CST)", 
			UpdatePerson: "O7jG86oTnNKZz42BJFl2VdM", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobby.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobby.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const removeEntity = await ctx.service.lwHobby.remove(entity);
        const updateEntity = await ctx.service.lwHobby.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby entity', async () => {
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
        const entityList = await ctx.service.lwHobby.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const result = await ctx.service.lwHobby.delete(entity);

        assert(result === 1);
    })

})