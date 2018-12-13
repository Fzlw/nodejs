'use strict';

/**
 * sysperson
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/sysperson.js  start...
});

describe('test app/service/sysperson.js', () => {

    it('should create a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.create({
            Id: Id,
			Name: "uFJ7s3bTtojN3wR3v", 
			LoginName: "enJ2H10RPCFm", 
			Password: "bgyyq3h10DhjlS69q3kthRO3XfkjsKPoAkLQ7RyyJ56SQq1XmM2qzFSwXUj", 
			Sex: "r", 
			RegisterTime: "Mon Jun 18 2018 09:19:17 GMT+0800 (CST)", 
			Province: "Aee1NHuqibL0M8yMETBDyjs4TK3r98v1mAKp5FaNaguAV3bPC5AXOq0ynBlFjxUXPJaKCM8GtLgZP0NvXG", 
			City: "VUthhAKbmri5j5EtYTBk457k41aglYVQW6luSjzJnzR", 
			Introduce: "1qB5vnw3GilX7RRpLpUBz", 
			Position: "7UYU0u0DJwKULhiOL3injKxUy3TLBxyCv3hOELKNovouFZxIp1gjvDtIbrB84b", 
			HDpic: "ICFBN2IcfEFGhGprbS1ko1pazAvsbtKTweEeR9hRBK3hUozlH39UAPEGWaOoly", 
			Valid: 1, 
			CreateTime: "Thu Oct 11 2018 01:24:09 GMT+0800 (CST)", 
			CreatePerson: "1J89pnrWxei6EZAT38t5zzThX4XN2ZQbMP", 
			UpdateTime: "Fri Feb 09 2018 00:16:13 GMT+0800 (CST)", 
			UpdatePerson: "e28UNrcAI7waX3fmJDYHuAfoeQr3KRvY264xjxmeGobrrMrhiQE4HOGEzmj5UbkhBMewLAF3TUZiuvUhZTCpEbXhbvj3GWjrsQ2", 

        });
        assert(entity.Id === Id);
    })

    it('should get a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a sysperson entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.sysperson.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.sysperson.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const removeEntity = await ctx.service.sysperson.remove(entity);
        const updateEntity = await ctx.service.sysperson.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of sysperson entity', async () => {
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
        const entityList = await ctx.service.sysperson.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const result = await ctx.service.sysperson.delete(entity);

        assert(result === 1);
    })

})