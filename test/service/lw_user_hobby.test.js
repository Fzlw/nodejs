'use strict';

/**
 * lw_user_hobby
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_user_hobby.js  start...
});

describe('test app/service/lw_user_hobby.js', () => {

    it('should create a lw_user_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwUserHobby.create({
            Id: Id,
			UserId: "0NSc2oyNNn6BFL", 
			HobbyId: "pT9MQoP0tWN3Uslr0h", 
			Valid: 1, 
			CreateTime: "Tue Nov 20 2018 22:51:24 GMT+0800 (CST)", 
			CreatePerson: "Bd821Y46MgSOr4FeASp3hNXtHkQrrEu3KA6Vsgq15xp8m3Lx1bnOc3sgO5j8xHFERULk", 
			UpdateTime: "Tue Jul 24 2018 21:35:17 GMT+0800 (CST)", 
			UpdatePerson: "0EOEe9XoYYguiC6RhHtBr2f1pA3LMdrjH69ZKRNug0xkNFwGay9czP0zJsZ9uMrsGCdShFMRdxa1Av75T7YcRZ0fLwvXBZ", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_user_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwUserHobby.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_user_hobby entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwUserHobby.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwUserHobby.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_user_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwUserHobby.getById(Id);
        const removeEntity = await ctx.service.lwUserHobby.remove(entity);
        const updateEntity = await ctx.service.lwUserHobby.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_user_hobby entity', async () => {
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
        const entityList = await ctx.service.lwUserHobby.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_user_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwUserHobby.getById(Id);
        const result = await ctx.service.lwUserHobby.delete(entity);

        assert(result === 1);
    })

})