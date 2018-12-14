'use strict';

/**
 * lw_music
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_music.js  start...
});

describe('test app/service/lw_music.js', () => {

    it('should create a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.create({
            Id: Id,
			LinkUrl: "jKfbIT4u0mSqpmYn", 
			Singer: "HW", 
			SongName: "n9hE7", 
			IsBgMusic: 1, 
			Remark: "6Yg5DP67RF5JK4IpEgIAwDK7xATemz61MX5Ku3D9PGCeBMvMYd6H56204ADFN4yW9EUYANsPqp", 
			Valid: 1, 
			CreateTime: "Sun Dec 24 2017 00:07:25 GMT+0800 (CST)", 
			CreatePerson: "AxVxXqFhTsQ6cwe", 
			UpdateTime: "Sat May 19 2018 04:18:51 GMT+0800 (CST)", 
			UpdatePerson: "QR8U5BJhTxjIlUio4Lgg34akRTp", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_music entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwMusic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwMusic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        const removeEntity = await ctx.service.lwMusic.remove(entity);
        const updateEntity = await ctx.service.lwMusic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_music entity', async () => {
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
        const entityList = await ctx.service.lwMusic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        const result = await ctx.service.lwMusic.delete(entity);

        assert(result === 1);
    })

})