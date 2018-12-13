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
			LinkUrl: "LrhOZnh2", 
			Singer: "Axe1Prudp2KhpCiSILc", 
			SongName: "7s29Hg6HsXsIeMdHWQPvo", 
			IsBgMusic: 1, 
			Remark: "LS4SPNaZGymDKTq9I9Vvunu4iaT3GnV5Bio3FPG0l4Ojl6VOwfeyjgMbfX1nxx4Xq5LN8GehTrFeIIdoVtQ1i5x9O", 
			Valid: 1, 
			CreateTime: "Mon Sep 17 2018 12:09:16 GMT+0800 (CST)", 
			CreatePerson: "ugdLS1BamPVlef750DgoQuuGholcyDxZmKG", 
			UpdateTime: "Fri May 04 2018 17:16:59 GMT+0800 (CST)", 
			UpdatePerson: "gwpR7ER3", 

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