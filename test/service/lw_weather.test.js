'use strict';

/**
 * lw_weather
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_weather.js  start...
});

describe('test app/service/lw_weather.js', () => {

    it('should create a lw_weather entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwWeather.create({
            Id: Id,
			Province: "XPXHOpuqrWe9QFLHZXiHybSHronGsG2I02ADp56BaVYyL1IDM6maBcucrpKGar5s", 
			City: "r9koNsPHGlZqE1lwk1jacihWO4K3", 
			AdCode: "Gc", 
			Weather: "ya37uJ", 
			Temperature: 1, 
			MinTemperature: 0, 
			MaxTemperature: 1, 
			WindDirection: "9g1", 
			WindPower: "ra", 
			ReportTime: "Thu May 31 2018 08:16:37 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Fri Apr 13 2018 19:57:47 GMT+0800 (CST)", 
			CreatePerson: "ub1hYiMM3kYLfkMDLovzqN0zRfE21m98qadaRskDH5b00wNcfidjLn1oK6XGWszaur7UKiBLSJa1hYLiPQ2", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_weather entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwWeather.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_weather entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwWeather.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwWeather.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_weather entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwWeather.getById(Id);
        const removeEntity = await ctx.service.lwWeather.remove(entity);
        const updateEntity = await ctx.service.lwWeather.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_weather entity', async () => {
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
        const entityList = await ctx.service.lwWeather.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_weather entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwWeather.getById(Id);
        const result = await ctx.service.lwWeather.delete(entity);

        assert(result === 1);
    })

})