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
			LinkUrl: "ZohSj4Aa11", 
			Singer: "lsUQlOTMyYNAu", 
			SongName: "CeDIICowRCbtY3uZWv1oA4PH", 
			IsBgMusic: 1, 
			Remark: "AJaD75SlRaqxJ5X0uM3EioxzzUNFvAcvoheDSrC38bZP6BjyNbRXs0oHDBn3MPFPTudUswU5R7Vwg3i0HpWjS", 
			Valid: 1, 
			CreateTime: "Sat Oct 20 2018 18:47:21 GMT+0800 (CST)", 
			CreatePerson: "ECtrS5SYVGu4tf2CjxgcywpN0NPaKGajC1oAcVCtSQ85CEWXZEWRBp8j", 
			UpdateTime: "Mon Nov 05 2018 03:12:40 GMT+0800 (CST)", 
			UpdatePerson: "DCtdR6lYBcRZRN719sz13AqVh26o43EnDxiRWwQaXrPApdvGINrTwjSRPmLjb0jXYEWZdvdaJhqruJhYBR0zpfMb4p0wxn2Te", 

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