'use strict';

/**
 * lw_books
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_books.js  start...
});

describe('test app/service/lw_books.js', () => {

    it('should create a lw_books entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBooks.create({
            Id: Id,
			Name: "V", 
			Pages: "AYxui", 
			AuthorId: "9IfPHYHvii8HWc2", 
			BuyTime: "Wed Feb 07 2018 18:53:12 GMT+0800 (CST)", 
			Province: "sKL6CLYiPsQX4vFSntMwwBBgVqZVBDWqkw1YRVo", 
			City: "lw17fCrBA62wr9o9L41SNrPGbGytuoa8rk5yYUIRO8empG42eAu2gGAeyIjJx9jMZMQnd60IlbM6kMfMfS9eQRHgCzESkWV", 
			Remark: "7K3l5dt8tEUuJTYVTzbcjsmTcWJgXns3rqx58qssEDGML2D47P9ouq74PPNI8rlUPxJcAvztar0dVZCKK4QPe1dF5qn", 
			Valid: 1, 
			CreateTime: "Sat Aug 18 2018 09:49:48 GMT+0800 (CST)", 
			CreatePerson: "AMhmAbcY3lvg2poX2HgYtjN1O7pmFBhngri55hxxHFoDf52uk8eOeX5C", 
			UpdateTime: "Sun Jun 03 2018 01:03:31 GMT+0800 (CST)", 
			UpdatePerson: "k54pW3oXnLdH2qe4IWT09vqkQQGw7bLHDLz6zUodsMDEoYHwl", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_books entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBooks.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_books entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwBooks.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwBooks.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_books entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBooks.getById(Id);
        const removeEntity = await ctx.service.lwBooks.remove(entity);
        const updateEntity = await ctx.service.lwBooks.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_books entity', async () => {
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
        const entityList = await ctx.service.lwBooks.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_books entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBooks.getById(Id);
        const result = await ctx.service.lwBooks.delete(entity);

        assert(result === 1);
    })

})