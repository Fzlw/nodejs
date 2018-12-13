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
			StartTime: "Fri Nov 30 2018 21:36:53 GMT+0800 (CST)", 
			EndTime: "Wed May 23 2018 11:51:52 GMT+0800 (CST)", 
			PointOfStart: "K", 
			PointOfEnd: "4Mhutb3NVex0G9GEyPD8TDDaVqcBHGwjxXfzYk2LbThGQfKYu9Hai4M2whGaL2A8JqnXVYRYdqOqsZxOFFF7bbgF", 
			JourneyId: "j396M8SpacTd", 
			ImgGroupId: "HOeBLX7p", 
			Describe: "Dn6Sbo2DLDTzLqsBGbPzpI6ukGqBqrMGrHr7fCWTVdJrjANzbPsSqbLHbTTBFPmLkCaL8gNNUmQfgOmQeBqqZNaZCPpf9BNUB7r3FEwLE7NyyeKd580sYsdCiLkfiagyZ7L1gKJZ88MMYv", 
			Remark: "staLVLkxeG8XYn9hci6UDAoOTfYrOGniO", 
			Valid: 1, 
			CreateTime: "Sun Mar 04 2018 18:37:27 GMT+0800 (CST)", 
			CreatePerson: "ljMxLQT1lYKcT9skE3rPhx9YFmQsCBm4uaO5WH0nZkB605rJrutN3W2qOzn2y3lmuHFDgk8J9Hf2mfr3u8", 
			UpdateTime: "Sun Sep 09 2018 00:20:39 GMT+0800 (CST)", 
			UpdatePerson: "1XoaLMgLgnJYKch8xACVA6RZK3t4dwjrDzs0tO0hD2AR7bnCyzb06dgq93DDsLzzexgHJ4LFvD8cgPlXZwulJwiLl7", 

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