'use strict';

/**
 * lw_dynamic
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic.js  start...
});

describe('test app/service/lw_dynamic.js', () => {

    it('should create a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.create({
            Id: Id,
			HobbyId: "eJD8Lj9gUVC", 
			RelationId: "cn", 
			UserId: "uZeQ7cFAmlRhfSUj", 
			Caption: "Kwadw7YaUXFHshRgPE7eTvFHsKCYp2xTvDEI9XK501og93FYH7ifaglUEI7itnvtT8gZdDwxw18Ws8rCEBg2iKUP", 
			Province: "Ft1Xln4symsAQBjFtQNqUJZLbrJ1a1uVswKpUQKfgYKdSIAqToGSBhVD3coRhN4b4wzlkoiAvRoRUgd0E7pCG5MBo", 
			City: "GqZGUJfCqoTi5b79Rasglbn4NQYDXlla5E0yHcYcJHXhGJ0oeynAhtt65nGTzTKkDb3PZBWSb6BEOYrR0", 
			Valid: 1, 
			CreateTime: "Tue Jun 12 2018 20:23:31 GMT+0800 (CST)", 
			CreatePerson: "9hoxP3C1RxB8cXNDSwVtdW9hnMMFPuajADcyEHQr3gP62KMTiS4W", 
			UpdateTime: "Sun Jun 24 2018 06:07:29 GMT+0800 (CST)", 
			UpdatePerson: "uLz1CGt4EH8RQyqD0SpmarajJwqts", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        const removeEntity = await ctx.service.lwDynamic.remove(entity);
        const updateEntity = await ctx.service.lwDynamic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic entity', async () => {
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
        const entityList = await ctx.service.lwDynamic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        const result = await ctx.service.lwDynamic.delete(entity);

        assert(result === 1);
    })

})