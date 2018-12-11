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
			Province: "sTDOdDQLcolc5TQbOMXkNQchm5Y6NT", 
			City: "VlAef3RA9ftKaaCCOHwFMlC9LEl3hL2Lwz0rMKnyZm8FZnfLS", 
			AdCode: "xMW8", 
			Weather: "T4YP0U", 
			Temperature: 2, 
			MinTemperature: 3, 
			MaxTemperature: 1, 
			WindDirection: "yJYGd", 
			WindPower: '<=3', 
			ReportTime: "Wed Dec 05 2018 05:47:05 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Tue Apr 17 2018 15:44:36 GMT+0800 (CST)", 
			CreatePerson: "4I91lvZqepqZWioXvgZRMuG3YkQlkzr8TN8g6tq7BMTiiudyPX83PCYSc8pGqfUQmqo", 

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