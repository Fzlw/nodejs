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
			UserId: "DL9ilst8UczBmKkZVS", 
			HobbyId: "wBhm3OYR3C6wAxk", 
			Valid: 1, 
			CreateTime: "Fri Jul 06 2018 13:45:24 GMT+0800 (CST)", 
			CreatePerson: "MwqPVx01JGbat5Wnmalva4IXTD9LTzs2K36dBoo49ThlDmHjke3EeR4eQStVbQUZyxH", 
			UpdateTime: "Sat Aug 11 2018 03:10:28 GMT+0800 (CST)", 
			UpdatePerson: "H", 

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