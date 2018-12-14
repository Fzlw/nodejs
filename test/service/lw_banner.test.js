'use strict';

/**
 * lw_banner
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_banner.js  start...
});

describe('test app/service/lw_banner.js', () => {

    it('should create a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.create({
            Id: Id,
			GroupId: "KYz", 
			Remark: "Z5tP1Co6tD0yCnBTYdsI2wzRecA48Cw3cSDkT57TToesCBNucKuayR3jnKEYb6", 
			Valid: 1, 
			CreateTime: "Sat Aug 25 2018 09:43:24 GMT+0800 (CST)", 
			CreatePerson: "q48HuD", 
			UpdateTime: "Fri Nov 30 2018 19:11:01 GMT+0800 (CST)", 
			UpdatePerson: "l9zESRrdOiQ9EcivLlLAQOgIiMyKShvCWr7prZdESiFwScTVCgRk6f", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwBanner.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwBanner.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        const removeEntity = await ctx.service.lwBanner.remove(entity);
        const updateEntity = await ctx.service.lwBanner.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_banner entity', async () => {
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
        const entityList = await ctx.service.lwBanner.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        const result = await ctx.service.lwBanner.delete(entity);

        assert(result === 1);
    })

})