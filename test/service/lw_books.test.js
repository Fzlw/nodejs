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
			Name: "p96rP5DM", 
			Pages: "an", 
			AuthorId: "3g", 
			BuyTime: "Tue Jul 10 2018 06:42:07 GMT+0800 (CST)", 
			Province: "Xe0X6rTJJ84TTx3uTsKtaCDwpeFqcuj3PvSsD9f5zOQJSUepWt9ae3uwZKFBpZbMkYM2", 
			City: "fpd4Z25txs2KJUlD4vlLby60UNwtqh0zZwyeegA7prg5FkBQDVPzkBXjKIqfMNGYNR244ayQIP7GvHQNGBz6FVvF", 
			Remark: "qgOCvovuNrRTCLZPNpm4QgxXMbRHCaT2YcYGeMVN7hwGgxVfbWVYRib1AFMm3VNFSfIuQzPztjRzbim3f3GJD1RsUrKSdPYgSYL2EPxIYzbsGr1unCpRXLJeL07DXat1Fzu2zS3rz6niNOCdH9Nk6oinDYt5S7TGUv4", 
			Valid: 1, 
			CreateTime: "Tue Dec 26 2017 20:07:41 GMT+0800 (CST)", 
			CreatePerson: "V8yxP", 
			UpdateTime: "Thu May 31 2018 14:09:55 GMT+0800 (CST)", 
			UpdatePerson: "HLlg3H1u5I8WtCylwpYtVUeWaK5ttTlWvCQMX5db6EDe3aFXtKdkrc5KxI86h", 

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