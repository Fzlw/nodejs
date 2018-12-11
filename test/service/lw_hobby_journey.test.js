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
			StartTime: "Mon Apr 02 2018 18:10:45 GMT+0800 (CST)", 
			EndTime: "Mon Apr 16 2018 19:25:58 GMT+0800 (CST)", 
			PointOfStart: "YNpHGUkoMbGd6Uw", 
			PointOfEnd: "Uwk27oJVxIfyLR3nY3Am46n6Fia9wTpVvkE5aDjZHqpbsLxJtZY22JjH", 
			JourneyId: "1rp4D9to", 
			Background: "FcHH", 
			Valid: 1, 
			CreateTime: "Sat Dec 23 2017 01:07:11 GMT+0800 (CST)", 
			CreatePerson: "zjWP4QE7D61jtgyiPSA72USBOUMuUfT99hzdxxKQSgD3tlY1HC2JOJm31qEITZ5mF8EosZWOhjP", 
			UpdateTime: "Wed Jan 10 2018 17:36:13 GMT+0800 (CST)", 
			UpdatePerson: "1iV835rpYsNkhHPKUeYhanJU82XT4UoDRzHVaD3UqrjiGmqJqZ", 

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