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
			HobbyId: "8jEMY", 
			RelationId: "uElnam2slrqoLrCJMC", 
			UserId: "L1uy8", 
			Caption: "tC8sAYqVoZ3weuMdcqFacY", 
			Province: "SCTo2WfzlKm0noCa94prV3xHeKwAZVTXQ1Jt2PA", 
			City: "nTcQUEFYZJdX8h7Hq8UdUOZENOEnE6YlNIgK62yoDw9J6KwL0RnGKQld3wLzQ1Zy7qdMX991o6SdzfvFjFriXjOrrgp", 
			Valid: 1, 
			CreateTime: "Mon Apr 23 2018 11:51:27 GMT+0800 (CST)", 
			CreatePerson: "uxBkeDAue87UiBjB3IgDcoH0pDJHivHnUmPHYEN7bK6PUMXJkWgdov", 
			UpdateTime: "Sat Jun 02 2018 20:44:07 GMT+0800 (CST)", 
			UpdatePerson: "BgPAeXsY37WjQ9URuGoTFrONQntAUV1CxL", 

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