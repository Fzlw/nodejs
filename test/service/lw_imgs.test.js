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
			GroupId: "yQUooIqf5jWFZ", 
			Url: "ItRAxxOUa3us1rIq", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Fri Nov 09 2018 23:07:44 GMT+0800 (CST)", 
			EffectiveEndTime: "Thu Mar 15 2018 08:59:23 GMT+0800 (CST)", 
			Sort: 4, 
			Describe: "F3yRVYm4VZ", 
			Remark: "fPPeg3mtOj2", 
			Valid: 1, 
			CreateTime: "Mon Nov 26 2018 06:19:50 GMT+0800 (CST)", 
			CreatePerson: "nEkaDQSmQVIvXG93OSSiipYsSVBqVLzAsJ89gc8yuicBW40VD1rzCy", 
			UpdateTime: "Wed Nov 28 2018 06:23:02 GMT+0800 (CST)", 
			UpdatePerson: "tLfJFt4PfKqgf6oSV7WbThnptYqoSH7vSUYD4XqdBMsBleBuS7r3zS3vxSm2D1", 

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