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
			Name: "EArQmYEcSQakpdKSc5P", 
			Pages: "fPP", 
			Position: "zBS7ob4X6kya2vCxTUZiD15X2ylYoLq2ymZoBf3mfnlVKMYLv4bcjJJluo3Xob1EVe5zvKFcCROzBnZOTuIRY7ayjQX", 
			AuthorId: "T", 
			BuyTime: "Tue Dec 04 2018 00:04:03 GMT+0800 (CST)", 
			Remark: "EmUJeddagKR2Pjtm4JWLJ67UV4ocrpCgUfkhIFHbxSrMgQcgWOS8fFoGN3dOxpJhgs4lFKXUXyoukXQIn1RxPeJY5zGOFgSxoRadzelx2j3p98XfhfusbFesqnxPnv7rNBUqarxn1FnwSmtrzTeVRyyHofGRjV2bUoQTemKJevyBz9XEiFSrcevv1vQNJld68oMHY2AjpGRdgDRXHF5cFejIS2vWQJJw38F7PYQk5cDno96i2dJ", 
			Valid: 1, 
			CreateTime: "Fri Mar 16 2018 10:15:26 GMT+0800 (CST)", 
			CreatePerson: "MFdmg1Ki9W0OSqAZlHimEeU6D", 
			UpdateTime: "Tue May 15 2018 09:08:26 GMT+0800 (CST)", 
			UpdatePerson: "88LYhfPOLMFEpTlfINZXAYjjI0t4J8ewBYSyIUSUzk", 

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