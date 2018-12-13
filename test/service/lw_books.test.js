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
			Name: "AFrW", 
			Pages: "Q4Dy", 
			AuthorId: "fTNfgH59yLmEJs", 
			BuyTime: "Wed Aug 15 2018 14:20:39 GMT+0800 (CST)", 
			Province: "lBk3WBbUeDDlin7WdfGhNpqylRhazqOO3fFaZIm8yWo1D1", 
			City: "rZQsQOa0Ledr4miiIOpiKjTxn1cbG", 
			Remark: "F1YHnLc1fRmX91cZlifhvJR09BuG3E2Js96bRlu24hUP5hQoazyJmMymEd1gH9yO3yseK0RqCDcRQhmloWJK1CemWBdS97j5CPlzoiKcEokqPzKhlXNXyRkPd02Oom2l0CfHFUXvV4Z", 
			Valid: 1, 
			CreateTime: "Sat Jan 27 2018 11:49:37 GMT+0800 (CST)", 
			CreatePerson: "mI3ubNlaUrSuWPunb9Wg5N8HHsFmTbwGKwGdx1Cdk6cuWE", 
			UpdateTime: "Thu May 17 2018 01:13:24 GMT+0800 (CST)", 
			UpdatePerson: "92mD6qxbFwlRb8UYHIzVQyB2JihRgKYV72nRlXsxsit3BJojxLlC38Adn9O8z5W5qD67J9kxncumMz", 

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