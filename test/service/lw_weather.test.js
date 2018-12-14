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
			Province: "sVX5bAn7Bo42OFJyCB4f2iITovIfFVfEsjhaLEJ0ugNhwpModFnSrvQVxF9Bp6sfsjCfPmSsUNdL", 
			City: "oIK73k1oAbgVGhRmO9FV3kzJ1lE8PkFr27Q2cfesCuDvdE4Ri1WOORVosCPBCZzpMJ3Wl1MVdvmQ0o", 
			AdCode: "5", 
			Weather: "liBKQr", 
			Temperature: 2, 
			MinTemperature: 3, 
			MaxTemperature: 1, 
			WindDirection: "z", 
			WindPower: "O", 
			ReportTime: "Sat Oct 20 2018 14:07:57 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Sat Jul 07 2018 15:04:46 GMT+0800 (CST)", 
			CreatePerson: "w5GfWDVlYwYwUdqD4TOz0oBtjrcwoIcIdKWPLuZfWZWKqCaMJrCQAceACFsLbLJu2hgDOqIqnSblcCdLcBUEYwWWP6rkJF8j", 

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