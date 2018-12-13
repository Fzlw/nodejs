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
			GroupId: "2erQUyhp6iz6dZeS", 
			Url: "XJ1Tw0Sn5ngQrR6F85Rl5L63BEb2C8tEFYzRYP16EXF6FrYjnBlITmDo0cOB", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Tue Jul 31 2018 23:17:40 GMT+0800 (CST)", 
			EffectiveEndTime: "Sun Sep 09 2018 14:48:25 GMT+0800 (CST)", 
			Sort: 5, 
			Describe: "h2QSKKcS", 
			Remark: "oH", 
			Valid: 1, 
			CreateTime: "Wed Feb 21 2018 21:23:23 GMT+0800 (CST)", 
			CreatePerson: "jo16nVEUxmU5MRs3OzLCIAf9VaDpCu1FFgOgVVY0q4Y2vJy98cHodriGcqFWTiYFzJ8rJ2wHQ3W08qdpZWcL58A", 
			UpdateTime: "Sun Sep 16 2018 07:36:08 GMT+0800 (CST)", 
			UpdatePerson: "gXWfQ4Dv51tHTRln0edLGI9eycYllyOGBB5GphjzAfB0k6PWVJX7Ds63GDRDTtp7rn9vPam7augdng6PSv0", 

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