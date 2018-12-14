'use strict';

/**
 * lw_dynamic_daily
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_daily.js  start...
});

describe('test app/service/lw_dynamic_daily.js', () => {

    it('should create a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.create({
            Id: Id,
			ImgGroupId: "7Vr99", 
			Content: "EM42yQHiHF2446EignmWCOoc5C7ZvGHEvaUygJtH4cAXwdd801MMtqYDqjRqnx4tQqbUD59HjGKrxFTPmlCUoAUrAndGlfS5j7sp2RANhQgrX0WOGBpjhGgXs9nwSC7iz06YMuAy6N2FVintmB1cf8gZ7a9RPn4XHmNL7pU516Ybd4vccyBcss7D0s5FBaMfPntPGufB2hqjBi4zvzqmSqOoUABhWJNaPsJeGXDtbxVlgp7qyJPyQCIPQvHQfraDD2qVXk8xeK9z5YLpFppT0gwztB5RhnwDVJ7CCe9ZnpEpxbi3X0a2sXOmdEo5pGckz2pl8brQSe5rRkRwoE36BoGSDc4RxHfMx6M5RXqoHvD7b1IvDEhZmr5r97OaABXAHhiapLLHrRkZM5MOWjktqYaX1j9p1joRkII0qqqJcC0cNGcquY1SWJw86UJWyuwbLpkfK3ukMg3ENqMjuak7qi2HpwIt4oZyhose6r8M1nQvHwiifMxBzRUXdQ3t8AdsE5N8hvIzud", 
			Remark: "75DnSd1vYAdCicVFIgxyou0RdpsbST1YDWsGnhEqItDZag3HBxl7S2gY1upDo9uSvIFLzGCKPd7gTEaVq9qqgZHunrgZyqQ", 
			Valid: 1, 
			CreateTime: "Sat Nov 17 2018 20:40:20 GMT+0800 (CST)", 
			CreatePerson: "h80w", 
			UpdateTime: "Thu Sep 13 2018 05:05:50 GMT+0800 (CST)", 
			UpdatePerson: "43J3oI2lNgwE8UFOUV20hQd5RtXwktrOwR5Qrh9p7dNMDHlz2vHG6Km8wJtNezGWAXCGPzT1DBG9QUXlMm8CRfm6QqafPHN", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicDaily.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const removeEntity = await ctx.service.lwDynamicDaily.remove(entity);
        const updateEntity = await ctx.service.lwDynamicDaily.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_daily entity', async () => {
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
        const entityList = await ctx.service.lwDynamicDaily.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const result = await ctx.service.lwDynamicDaily.delete(entity);

        assert(result === 1);
    })

})