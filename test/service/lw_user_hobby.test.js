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
			UserId: "lHPIMQCQB", 
			HobbyId: "7VuP8VGAO6If3uGAeE", 
			Valid: 1, 
			CreateTime: "Fri Jul 13 2018 13:44:32 GMT+0800 (CST)", 
			CreatePerson: "9jvfp7a4JfbwKhowKMH5qpmXG4yFgRb75hFkcGY7eP6FvzSfNosXNREA5tCapA7qZuaoK", 
			UpdateTime: "Tue Aug 14 2018 23:29:11 GMT+0800 (CST)", 
			UpdatePerson: "WZrrzzzBsdCBz45TJxDoXAVFasUEurDJEyl4Uy7DXuzRvcuDk6r01peOUGICJ", 

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