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
			Name: "gQfoPBY4DuNqUAGBIaA", 
			Pages: "CGTV9", 
			Position: "bMcGIsXMw2uUcY3mkGnEuEJ03TG6a0WwhCpnmi70nGXOr0wjPPktDEHa3wSQTsVFUbmk3Up1JUED3mu6OUikCpwEaZUokcG", 
			AuthorId: "3q67XeETFWmbB", 
			BuyTime: "Mon Jan 29 2018 01:15:33 GMT+0800 (CST)", 
			Remark: "wjRqLjZOU9Hpztf05bSLxQhCiPqoBbcw8I4DyBWuwd1bBH84LiiofUJhou0wAWtxwZbOanpq4iLBAxOL8kIpIbHTqKTHUhmu5QAtTUB9DRi6nByPKygqm4boi0Qy47FGkKwKShs7NoYaD2itjlyzbvl4vmaSfPUb9qdBq0kK1CJIFOKikOeUb6HVdRpp6Qef3JiRC9SV8EzKUjhimsyCk1jq9zXY93Wit7hmVB3C1s2tHVLFnjApe6RbuBLqVGqohpW83W442bmsfMlx8uFvEb8fmecYluQ8t0WYYoKflpDSzDpfd1ebED7dUjq5iYNqXnJRst0k0NitAXC1wDBQDhe4TANsxZLrLkfqW0LmOPAPl1cJ8aMgtft4MCGjFMaG1L8yOwKT4wW60KG13qDHRSKgUntAXEYG3LsSB0EGqvQumM", 
			Valid: 1, 
			CreateTime: "Tue Jun 19 2018 07:35:33 GMT+0800 (CST)", 
			CreatePerson: "qssKrKb", 
			UpdateTime: "Fri Jun 08 2018 17:16:01 GMT+0800 (CST)", 
			UpdatePerson: "Ruu8tUIcgdqbu4XDn3QXqccVH3mYJfnXmctqjVOVBs6Xv39v8V8s60igwhyVZGwpmlCC70dt4YEQUWGHBoX5ILiNJEM3ZV", 

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