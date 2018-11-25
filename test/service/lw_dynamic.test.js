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
			HobbyId: "E9SrUdKz", 
			UserId: "g5oMk4gw", 
			Caption: "MPWT1ynwj2h6fRHgBWn2x8z5n5zq8AqzJkI3jywXaV3ZSNE5mNwtwtuQcXe1IAwfttecf3fmBnXbcgjsi6zF2vl2SLs", 
			ActivityId: "P6zKBqOIY7Qie5d", 
			Position: "1KRkDYFgNqOifVsJDBOmLNLb8MK0gz3GrtFmrgO0", 
			Valid: 1, 
			CreateTime: "Sat Jul 07 2018 23:50:32 GMT+0800 (CST)", 
			CreatePerson: "QNMPStEukELEjHZ6CSND5t7kt6lWJby2tbFd7OntUO9IjIe8GhBCkYZg4j71CKZOVk6pQbziWF", 
			UpdateTime: "Mon Mar 26 2018 13:35:50 GMT+0800 (CST)", 
			UpdatePerson: "UCYH32M7jnjF", 

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