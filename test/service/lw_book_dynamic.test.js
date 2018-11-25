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
			BookId: "6mW8LCKXcIf", 
			Content: "zfK0qM3jp7G8zv1z4dQgF1oeRq8xarBSxnHS8TJy4pkVxwiXtSFSQYSwXlPZ4Sg2az7Jy8owbsUQDDUgzt5zPZ7GBi1aFSj86lSoGsqQ4ctDJhWiJrtw7JTzOTGur0xOr5PJqwzPArfwv027uIjU0wIEhAbYZYXN8S0nXJNTVaWJL0Zy0YdeiBYkmrQDRVf5QUhi95kvJkZnzXivCQt0dni37UXgb2XJ17LLYVDQPms0dAgtGYrRaX2EuDXkAsEJ6jf8m7IdXxczDob5fKrJBfVcqHlBefjfkxwmFeEa87RNSQe8ZGRfBNq8XvyJHBOta5xGmS5k4ONqFVaoegiSz0q96EkbNtFduRgQnMWvgbpinXOV0e6DqxGz4l392FmLqj9M5Dcjm5zi8EpGdKAjBTmDnyGW6LztzX0kW6M2OAj1wfZ4I8hCV0TedocbIEHk1CSuTlJy6kUk2YKkZ9NDqfPbKTA9WHLcNsHTBtA7LujNogpO0y2iCbkFECaLtp9elVKoJymWmxog6PO6ND1l6VP2JWt71s2TSvrgfaFQI1jG3Cs80w8JYB4R5GDRbJPpQYfkT4yB6kcUiEAThJhLqY9dtYSmwvF6r21akDT2SaopjtqFM0HuVsCX9L0RFS5eLX8uskugRFg9SB33Xarl98nIVQhMFR6r4ATaZLticYvve", 
			Remark: "S5", 
			Position: "P1Rg8u2zaKkXZNnYfiHQhoNmoxWr4Hm873ulqspYj74DpNGg2r6kGR", 
			Valid: 1, 
			CreateTime: "Sun Jan 14 2018 21:14:34 GMT+0800 (CST)", 
			CreatePerson: "5cThzR3ZRIoQ9A", 
			UpdateTime: "Tue Dec 19 2017 12:59:21 GMT+0800 (CST)", 
			UpdatePerson: "TR3dJBkCFzLiAYl9gjuLZxxvsxnJJMYlYQM1zplfvUI4uW3m16PPuf0Gwtl1", 

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