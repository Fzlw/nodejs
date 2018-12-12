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
			HobbyId: "cANzgrta82", 
			UserId: "of7vJKTX0uD", 
			Caption: "Yb0J6BsQCS06RwQSTfJ299Zwvt5LNw7ph", 
			ActivityId: "13VfDe6", 
			Position: "ahY64RB985WGkXgYICD", 
			Valid: 1, 
			CreateTime: "Fri Jun 08 2018 03:09:37 GMT+0800 (CST)", 
			CreatePerson: "KtBLX0YAVn84ewarsvLfR5YMyEhjTKfv9m2h2z6P70gymGsIV8ogA90JhiHXM7gVo9hmiV", 
			UpdateTime: "Sun Jan 21 2018 06:23:12 GMT+0800 (CST)", 
			UpdatePerson: "3aCQQqylGqV1tlYpxDXXtcph2Jj8Xon3IXC9PytG", 

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