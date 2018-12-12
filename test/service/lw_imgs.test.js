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
			GroupId: "28m9QbQGmf", 
			Url: "ZQpn3ivzjPFzXBMiqiYlE9IyVtE2PGiIqkkOqz21872wZxD", 
			IsTimeLimit: 1, 
			EffectiveStartTime: "Thu Jun 07 2018 01:06:51 GMT+0800 (CST)", 
			EffectiveEndTime: "Mon Jul 30 2018 16:31:53 GMT+0800 (CST)", 
			Sort: 9, 
			Describe: "Pf3", 
			Remark: "TpVtiBCXwppwFi", 
			Valid: 1, 
			CreateTime: "Wed Dec 05 2018 01:53:55 GMT+0800 (CST)", 
			CreatePerson: "KFLl1SQ9KknT9IcRwwDLGHjUD4VWcCuK4h", 
			UpdateTime: "Thu Jun 14 2018 15:45:04 GMT+0800 (CST)", 
			UpdatePerson: "wl76dG7pcWHrZblO3ElDo0q7fhzpMWwLDAzjJTFUE3bH6Do7O5wLZdX7WvyFh2hYThxJHksfO4vGjw1cBSruUpI0", 

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