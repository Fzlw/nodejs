'use strict';

/**
 * lw_imgs
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_imgs.js  start...
});

describe('test app/service/lw_imgs.js', () => {

    it('should create a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.create({
            Id: Id,
			GroupId: "h3v7i7b", 
			Url: "kUmGnc1WJimI2hW", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Thu Sep 27 2018 23:15:20 GMT+0800 (CST)", 
			EffectiveEndTime: "Thu Apr 26 2018 03:27:04 GMT+0800 (CST)", 
			Sort: 2, 
			Describe: "DLQCKHWd96fBaT", 
			Remark: "rXwpirWHq", 
			Valid: 1, 
			CreateTime: "Fri Apr 06 2018 20:07:08 GMT+0800 (CST)", 
			CreatePerson: "l9NhuHE31x0OsJ4UFNSQG", 
			UpdateTime: "Sat Feb 03 2018 03:13:56 GMT+0800 (CST)", 
			UpdatePerson: "sFEU4dA7yRYiF6eXzbJa7XxU0GH72DbL0GX6zrb6dO6bJ0aytlHn4X2vfB7ygM0C7r5Ge", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwImgs.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwImgs.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        const removeEntity = await ctx.service.lwImgs.remove(entity);
        const updateEntity = await ctx.service.lwImgs.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_imgs entity', async () => {
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
        const entityList = await ctx.service.lwImgs.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_imgs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwImgs.getById(Id);
        const result = await ctx.service.lwImgs.delete(entity);

        assert(result === 1);
    })

})