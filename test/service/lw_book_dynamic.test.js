'use strict';

/**
 * lw_book_dynamic
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_book_dynamic.js  start...
});

describe('test app/service/lw_book_dynamic.js', () => {

    it('should create a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.create({
            Id: Id,
			BookId: "zHTWS", 
			Content: "f2iSwpOulbkTBvWcPzYoKzktLqlx77t1QahkWhQgLAIW2ZbO1xGQLG7GDNwi6YfcpwknPtdl2YRutfyO8CFDfiXfAdkZgheLiz7F2fiMXR34Ip3FC14x5wEJ62pjMdnG7TuSK86rn5iCLoMjiUM6faNAhkFlVuOBRUgfssxuOtXA141iPiP0FEEo8RmFKXEhwoilWh3JOycWsAZo6W877bJwDIcBdo7EXWIneDuINGNXVZPs4Q", 
			Remark: "2Yp6YXvl1zD944KlwYhQW3dhmk4d43lt3oo8v0Hd9y9wy81ASqXek2ksiRGhbl2XasO30pxaKKhTJlnSSrh5CcioE1a8a", 
			Position: "W2PHSCwbP8jpq3Pb44XSctKwuJ46ttVziwI2J1wYyTckk0", 
			ImgGroup: "Q2UzHTlyfNHq", 
			Valid: 1, 
			CreateTime: "Fri Feb 23 2018 14:20:21 GMT+0800 (CST)", 
			CreatePerson: "j8qstD2k9KjE6itDtVKMeozg2uwsVyHVRuZI4Q9vPtbEbgFH9TM", 
			UpdateTime: "Tue Jan 30 2018 01:05:13 GMT+0800 (CST)", 
			UpdatePerson: "S3DcV0K2WVqSJ5xkAuI27MJPgN549aphhvLGv9TmHmaxQaWepuCKq6fdi8mTLLgcMKN2vuLO630Ha7Hvw", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwBookDynamic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwBookDynamic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        const removeEntity = await ctx.service.lwBookDynamic.remove(entity);
        const updateEntity = await ctx.service.lwBookDynamic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_book_dynamic entity', async () => {
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
        const entityList = await ctx.service.lwBookDynamic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        const result = await ctx.service.lwBookDynamic.delete(entity);

        assert(result === 1);
    })

})