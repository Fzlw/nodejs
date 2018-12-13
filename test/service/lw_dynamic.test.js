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
			HobbyId: "Q2LK", 
			RelationId: "raUsWM2YhK", 
			UserId: "xeDKopUMPuf4TBr", 
			Caption: "aAC7Kgv2nKdYO2vlnNMSLdz45U94OKY71JzvAAWquIjdZ2DQoWG2ELSOVxR7HhCtNSaafuCTxd", 
			Province: "kb7AlNIo3y4skxcvl1gThM", 
			City: "GE", 
			Valid: 1, 
			CreateTime: "Thu Jun 14 2018 19:38:07 GMT+0800 (CST)", 
			CreatePerson: "cjH29LGt1y1SNyaBTftvDA3nr47uLnM0hqaWP277rZKhPuPx6uvXZcHa5AswYnfOgndSg8xjoLE5MfF2MI8XhfYJO8cHku", 
			UpdateTime: "Thu Jan 25 2018 11:42:02 GMT+0800 (CST)", 
			UpdatePerson: "NOgy1FttSkLZ", 

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