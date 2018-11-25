'use strict';

/**
 * lw_hobby_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby_journey.js  start...
});

describe('test app/service/lw_hobby_journey.js', () => {

    it('should create a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.create({
            Id: Id,
			StartTime: "Fri Sep 21 2018 13:41:13 GMT+0800 (CST)", 
			EndTime: "Thu Jun 28 2018 23:46:55 GMT+0800 (CST)", 
			PointOfStart: "DPYcnboY", 
			PointOfEnd: "8yf7bfCNBWThK", 
			JourneyId: "jXcYJKK7VfNpV", 
			Background: "fL", 
			Valid: 1, 
			CreateTime: "Sun Apr 22 2018 14:24:05 GMT+0800 (CST)", 
			CreatePerson: "QARDXnmhQIGUY4qMu6D5iGoEIDmuFHjjk6uIEgqWPTn5yt3JnZ3C6rIQqrixLGN", 
			UpdateTime: "Sun May 13 2018 03:21:07 GMT+0800 (CST)", 
			UpdatePerson: "qOWBfOsatvELPq1HRu9hpnFcShzCjZlz9Yhkat5HQ0JHPIZ7fJIND6sswZKrZ9msSyfsah15xv", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobbyJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const removeEntity = await ctx.service.lwHobbyJourney.remove(entity);
        const updateEntity = await ctx.service.lwHobbyJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby_journey entity', async () => {
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
        const entityList = await ctx.service.lwHobbyJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const result = await ctx.service.lwHobbyJourney.delete(entity);

        assert(result === 1);
    })

})