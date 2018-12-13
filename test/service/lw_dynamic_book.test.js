'use strict';

/**
 * lw_dynamic_book
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_book.js  start...
});

describe('test app/service/lw_dynamic_book.js', () => {

    it('should create a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.create({
            Id: Id,
			BookId: "u45eva8zWoa", 
			ImgGroupId: "m6", 
			Content: "N4Vs3KdLizyMUj0tgwYbZTqmK9COW26hNWkg7YwLXZFiG8eySA61vKt9zILzhgDzjkz1csQsK1niKOFa3gxoMBl6LLMu7ngux1GvrQhISNsOIhVELpDwCphSc3akP8VcgSPHaZAYWh4o3Ryg0l7AVE1WofG2oYh1nsZbxVhcU9rWdNLzfUmMvBCtg45BP5cCvuBvN1O3Zh11RYEgmnx0Le4AG7SGAOtJANhMvovKdcQCKUjKCYcE4RFiUUmUV9wPkZOlb453DfvLeo29jquaUqQVtLV6mD0YQyp2Q7LZcp9bhRqL6aosJ8VWoNbdu6fbqDnUWHCfMwTirI2ChPXl4ZXJZiv03vjrNk7iC4lrUWwNJf0U41EypUtDhc0tdbhVSlD6ViZmzPuFl4RERc6Ix5aW0sHWZGOMmu2BAXaH82jg7S0AHBoztFqbcQZgvYDAE1ZzjcE42rrMS8gjPGs71Pz3AJLoLIQfBEooyXLsFV6EKW4VHdFmAj1wyfPakyxx7aWT2Ck2Q6ZtY8VlahwvWP0Vhr3nAbGk2d4QNXSh9LEsYrTzCBQMvKSWQA9W9hswRxIVV0PT5O3BUC3UyICCqzhdL2A68Dw60c2GV1cJ8jv5QYnvPEDyqIHXx7DsdLMSIru3VmZGJYcu4vtMVMphESEmv2ZQrJYXvymrVrlsyW8Rq0hnilx1TSr1j2glt1GbiOxmsfu9U8ympahcqKj6nmfpcwgGH9nl3r11cCWHhQkBooW5GLMOyYfqEAUprj9R1612nOWiJ2JRTVIzJoJcVs37AcNzuuOwJTuzpH2WeI1VoSdENntTLq6vI9G5QyksbbnZdzsUMJrm8d5uo7HAlNjHUxvfeA9zvd3nblHASVwK0bTjNjTwvIarSuRqH4b2VykBi1JugeCsa53oHueme1NESS", 
			Remark: "VEse", 
			Province: "pJ2", 
			City: "XPVqos", 
			Valid: 1, 
			CreateTime: "Wed Mar 14 2018 06:34:01 GMT+0800 (CST)", 
			CreatePerson: "jYjegXPCmKEiyy4Pvld2te3KBFwSQ7LRZnCws2meHhPb8xaicIiKKZ5g", 
			UpdateTime: "Sat May 26 2018 06:17:25 GMT+0800 (CST)", 
			UpdatePerson: "2GiW", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicBook.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicBook.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const removeEntity = await ctx.service.lwDynamicBook.remove(entity);
        const updateEntity = await ctx.service.lwDynamicBook.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_book entity', async () => {
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
        const entityList = await ctx.service.lwDynamicBook.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const result = await ctx.service.lwDynamicBook.delete(entity);

        assert(result === 1);
    })

})