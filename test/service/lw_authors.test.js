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
			Name: "GDqEnke", 
			BirthTime: "Wed Sep 12 2018 21:18:42 GMT+0800 (CST)", 
			Sex: "v", 
			Introduce: "8PDA1vhsWCgQcAb7fJlDGg7utUA0g9EMnnImpW1bpgY62fMQYkk8w25pHhBzZs3Z1yU1ojUZLknqOWW1yBtXRXtR6SlF23D3rjob4rMowNaabiu53Ul2Y2JMedc6XMirv7vhX4yp6Y6uIp2A93IhU97Tbz8xcvLYAKsRyr2QKb", 
			Remark: "R5q5sKJlrqQA4", 
			Valid: 1, 
			CreateTime: "Sat May 05 2018 09:43:09 GMT+0800 (CST)", 
			CreatePerson: "1r1jvRwSfw", 
			UpdateTime: "Sat Apr 14 2018 12:32:05 GMT+0800 (CST)", 
			UpdatePerson: "3Qdr3zpadMohFgzynmCdfJRRBcbLll0Zvt3oOOCGsbzDxuaw7Lbtxts3LkH7aUpp1sq5851YYskbVuoDKFG", 

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