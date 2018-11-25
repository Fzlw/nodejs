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
			Name: "s4TFxUxx4f9k1Yimz", 
			Pages: "c", 
			Position: "zy37fzuBbyaaGKatvCRgosoIllsQ5rHfbICuXcIAF7vfgyFQaFNTjq3bsDlbbJwIe0EFhsQPp8o9A6rvUuwdk7iYBHp7JUt", 
			AuthorId: "aYQQ3J2UPWC7Nv3L", 
			BuyTime: "Wed Dec 06 2017 02:26:38 GMT+0800 (CST)", 
			Remark: "o0y8A7qZyhKupeUjxIG6rk8PYfKjwAYSU0XGWRcCWQLFqQjdJEUFBBZq9x5ycHMzmcSFBRmz6CIQueqv2ocgOn4ioTnrTw0L6kWv3cOeo25j5vrquJMFNLgiKREyKjkJzAourz5wN0QOrg1yR3zQDykT3BGLhaRbNGEjDqpMewSDZ576tQb3P6WjXBLLL3Ueu8TNegouymz0wofb9o2p8r7YDB6TujZmlue4j2InhjXbR76dtkY2jpN4TC1WvXOxO8JB5KkJFOWgHobD2", 
			Valid: 1, 
			CreateTime: "Tue Jun 26 2018 04:29:45 GMT+0800 (CST)", 
			CreatePerson: "W7xXIJJYiAKQWT7WhBuHZUuC33eSPacEzTiYDZVSE8IkPB1x5ux4hdm4fOOBmnZaIV9hGOcNiQDe", 
			UpdateTime: "Tue Jul 10 2018 07:13:52 GMT+0800 (CST)", 
			UpdatePerson: "oSANa0Bt5PsbCrNX356ao8cssTn0mXUUBhZQJVcNkSyCaprXKuUcxMfMBFJ3GZWUqPtub8IbyR", 

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