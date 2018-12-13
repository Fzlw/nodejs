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
			Province: "oStiCbmUutAUpu6tOmgaQIbksxJ5VOm8eKXnSaFxioTWw9W9fEsPsG1QSnGFHsQm6", 
			City: "udYjNdWslz5Q0q4EsaUDZKOX7i9yYtKuYjCILa1noZrak8sdtUPnjsZ4F58edycvamnaopluqbzKIn3h8DTHf09gk9xNHdkLPK", 
			AdCode: "c5", 
			Weather: "7nSBeD5uR", 
			Temperature: 1, 
			MinTemperature: 2, 
			MaxTemperature: 3, 
			WindDirection: "g", 
			WindPower: "HtG", 
			ReportTime: "Thu May 31 2018 00:20:49 GMT+0800 (CST)", 
			Valid: 1, 
			CreateTime: "Wed Aug 08 2018 19:01:59 GMT+0800 (CST)", 
			CreatePerson: "pQdjWVGsFU4uChKtq6jJ73QzgFWzzX5ImzkJuw7BNJZZenbZPrsQzDNYonfbrmmoV1MBkCNHw3KcVXZuxwpy", 

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