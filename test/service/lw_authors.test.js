'use strict';

/**
 * lw_authors
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_authors.js  start...
});

describe('test app/service/lw_authors.js', () => {

    it('should create a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.create({
            Id: Id,
			Name: "tjuMlSXtLf4LoW6gCgA3iUtN", 
			BirthTime: "Wed Jul 04 2018 07:16:21 GMT+0800 (CST)", 
			Sex: "j", 
			Introduce: "NLzOizKP5vbs6Gja4qzlRIUYPwYHE9TKVd3FDgTQu3j15bEUhY427pkF6sOdHMZI01HoW89BSq2cEXHnMp37cev0HUXpsJYIarVZ47eSbt1VlCOdiQT3m7TNcLqzUGka2O9jJFAPr5572N1ezDeslMdnTAKYQQqNdlHS86ZhF5PmTJTM0ag6Z5JQo6FCi79", 
			Remark: "MbXns8mbruPkb4vDBxu6DiedE0ET96lDXxMkagIMSuSwHfGmF8aV1ljXwTQbC6CSAEczav", 
			Valid: 1, 
			CreateTime: "Tue Jun 26 2018 14:24:40 GMT+0800 (CST)", 
			CreatePerson: "kTtYLwKTdRcrTFhWCWNr1JEkoViGVq4s5fpgn5Gk", 
			UpdateTime: "Wed Jun 06 2018 04:28:39 GMT+0800 (CST)", 
			UpdatePerson: "gzglz5sQZ0TzIRPrduOoSF9nzgLYDK", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwAuthors.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwAuthors.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        const removeEntity = await ctx.service.lwAuthors.remove(entity);
        const updateEntity = await ctx.service.lwAuthors.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_authors entity', async () => {
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
        const entityList = await ctx.service.lwAuthors.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        const result = await ctx.service.lwAuthors.delete(entity);

        assert(result === 1);
    })

})