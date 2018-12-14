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
			Name: "qrQrlGcQn2wy", 
			Pages: "7Hgl3", 
			AuthorId: "iCcAiG", 
			BuyTime: "Mon May 21 2018 14:42:29 GMT+0800 (CST)", 
			Province: "hSoUhpW9gZyzvZYhOXZ4nPaMza5V8kWKGBA6PTgy3Fhk5L6ZMC8ZbspTCqL3tm1z7ynL6KDlQe1PNo6Sk", 
			City: "PXH9phkp7WGclpi6IzhifjESbuqhnsPcNca0Zf", 
			Remark: "UlntMDlmVBnlUkXDBQW64EOZzLpGQB8hN0JHzGEfXdJ35sXEAcr8nmy5sjWyD2TwbBbDUBEE03jo06T2lJs6Cw4FW1gHwKzbje0QpUjLlhjt0WDAT8w6wdncwoFZmof5AlnEZKmF11rVB4gugCliRBBTEIb1YcjMGnfgHtQ7S2e8m0xRE3HIG9hbgAhtXbtyrQDoM1w0fdYdrGzD6lF0cdgUTMVCuQvxmwUKb4jrRTaa55STh18G7lj21mrfojPRLzYWByEDq3jopGYnsO69FCpf2huKXyW8DnHGR938kTnStG6jj7RK4nwczgIZ2q1ZhTW6ODSsCKoirJRExl9NVNktAybL5me", 
			Valid: 1, 
			CreateTime: "Fri Apr 20 2018 18:34:19 GMT+0800 (CST)", 
			CreatePerson: "BurZwP5tegA0u60w05EL4qAzwzrixZjbHECAd9sqils9nuKTm00j2qdwDq07BdcSLI7IGrm6UV1", 
			UpdateTime: "Sat Nov 03 2018 17:22:10 GMT+0800 (CST)", 
			UpdatePerson: "8PuPsb2QvWDpVppHzthometrQlLBtRP", 

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