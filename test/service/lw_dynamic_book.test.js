'use strict';

/**
 * lw_dynamic_book
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_book.js  start...
});

describe('test app/service/lw_dynamic_book.js', () => {

    it('should create a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.create({
            Id: Id,
			BookId: "Dr2tpJ", 
			ImgGroupId: "6", 
			Content: "kYa6SDeptWD9xsQ6wz0NUTBSO65HQltxDZwkGWehE7OcyOJCZOseCW1i4fQUFFJdDQhPnGD6zjmeVF9ebqb1E4UHUb1JLjbdfIpwALYxofJFtBQ0Pob69F7RflcJARR4TAHrQoQlXdNmyADrOmBOZf9APruR3H0TBMRc2vkh40vXLHyndSOH", 
			Remark: "csuYmZLWetspyTbr1YBxYCRfVhfPfdI2LVuDOCAPYUPYBPOawzMPeSZPK98nNlfX9b0N6QnNffi7fL42PKPen9wVqJGz", 
			Province: "Y4xoeHbqHxW13eIztDddkDTdWN83y", 
			City: "AvFQwSFtin6zjk0aUquLRqpUc7BtF90hOHYN6JdZC0Tib57vW1iOZ16k6gqsZ92p0JcvttsUjlMHqTVQryJpMm0c", 
			Valid: 1, 
			CreateTime: "Mon Sep 10 2018 18:52:41 GMT+0800 (CST)", 
			CreatePerson: "yE1NhxDxPztHdi7YkiDCQHg3WOd3HRxsJ07DCpIEOC4n2mXtmvvhKL5h5jAIfhmHJLldV", 
			UpdateTime: "Sun Jun 03 2018 02:38:00 GMT+0800 (CST)", 
			UpdatePerson: "iEZa8lgfn3AkLhlFB", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicBook.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicBook.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const removeEntity = await ctx.service.lwDynamicBook.remove(entity);
        const updateEntity = await ctx.service.lwDynamicBook.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_book entity', async () => {
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
        const entityList = await ctx.service.lwDynamicBook.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const result = await ctx.service.lwDynamicBook.delete(entity);

        assert(result === 1);
    })

})