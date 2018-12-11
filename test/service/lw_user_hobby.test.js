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
			UserId: "tMbdu1DCEB", 
			HobbyId: "esMhfJZy9As", 
			Valid: 1, 
			CreateTime: "Tue Jan 16 2018 10:45:04 GMT+0800 (CST)", 
			CreatePerson: "HQwU8QL208v", 
			UpdateTime: "Tue Nov 13 2018 17:20:25 GMT+0800 (CST)", 
			UpdatePerson: "KuxJiWfRycb", 

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