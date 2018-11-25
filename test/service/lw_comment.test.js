'use strict';

/**
 * lw_comment
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_comment.js  start...
});

describe('test app/service/lw_comment.js', () => {

    it('should create a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.create({
            Id: Id,
			DynamicId: "asXEeMg7mjiUG", 
			Comment: "q4y79bl7zPe9GYnJleC5LYUFKNbEjlhRWZFln4ZIvMiONoX4WwqLj5CnCCtpIDRaWKRhMgfUKzsozaVkAJx2zqQIAXHtT1sFu9tg18bxAm94jZazeAZ4tiUHSp2VRiz2YqsWGV47DCbi575ng4efeGbG1a3ZrKQQzSeKPfyp9syz6XYrV5Xl4lCTNg8aqzuHZ68X0aXPejDAODYYsUvQrzGE0MAXIWzhiB7HOZUYme6zXVqjMT2QiSEVO7QvvWWCuHFeKN9bnPzugcRQfC1tY8F13XeHwmjWD67eyF741cZPzqrxSgxQTcXJOKzV8rovVhUIMR1oibbIRLyBv22TxjSlCZdGp9CZLqqURxodkmLfmnat3ckefEJBOLIIXoCcgbnGSJQADjkCWaDlBr8qqZIqbOUPMVDIvZAtt76shSp0kgsGcRuINs80PWjaGU6K5GDeCvvPFdK7LZYZkwaoYG2sSNeEM9QcfVJrUpArAwT1bPOlT3mxFDHic8kuRg98tfFrzflQGJaCLsQZ4KgwxgP26m99upSoHBzaO7scNFJFLUJWngZUvJhQEugdodjpL1aBO7bq33XEWYg2Yw8GCzr2Y7t4FQGM6Ca834uzmH7vgAWPGuK9ePVym3yrC7uzCR2Cggb7saS9nI6naECOTp4utaxUlHNkJVBipUvEzWEy0FHw4zglTRaNGXIZudwbB5wQ5uViPBWpsFHVAnBJAkWaPkXhvIdXJibeOLDUx1VGiLAcM9qCkhp0wXnJuGTrDmN6S1tLnvjxYHhHk6YpqJp5lX", 
			Position: "b6MLu8Tf8ED678wCE7i7eYEQOtdzY1", 
			VisitorId: "XtiSqXQ", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Wed Feb 21 2018 05:59:43 GMT+0800 (CST)", 
			CreatePerson: "vmhNvn0tozjXbIDLe3EiOJ7sR8jSqDXiukFMFleDpJ", 
			UpdateTime: "Mon Jan 29 2018 06:58:17 GMT+0800 (CST)", 
			UpdatePerson: "FbfImv3VturFc1NhPrwg7WFn3hAmU5sSwgfPFcTE6fLHzZVgKQwsCmfB", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwComment.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwComment.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const removeEntity = await ctx.service.lwComment.remove(entity);
        const updateEntity = await ctx.service.lwComment.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_comment entity', async () => {
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
        const entityList = await ctx.service.lwComment.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const result = await ctx.service.lwComment.delete(entity);

        assert(result === 1);
    })

})