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
			Name: "F3APQds5", 
			BirthTime: "Sat Apr 07 2018 13:33:56 GMT+0800 (CST)", 
			Sex: "v", 
			Introduce: "Q3bFvhhKnrkD53FZVieT90tutAWbW4BZXDBpxQEORHi3yqz6T4blLcV0KcWfK8TW1CuHflbz4fuu9WNAOYDIBtIMizRJaElvdPu3oo9RMqNXzPEnMUGZ0gqtcvQbbKTwMsVU77YhXw268bIwNMg7Sfh4aZscZZC8m9tkkEUHfAGjhD60AW7xtGuouDpnXEnHi1aB5WnFHbl5MYsxE9gEbewbCUd0NdeCPhhueF0DCOQXk3CmgswCFe01OszrFPm9KXCn6kkvoHRE0bmpRrgK6DTuthqGIgmKRL9JmF9Z8P58t6l1cgFwG3A8wv7qQsotS27T827MXUy7n2v1FKPDN5SpnOjP3wkT2Jckqob1k6FJIYEfhaxARMblzvVUW4EYFIgmz6vSqM0lO9vVDMsaosVuTY6FsbDQL8tj6sYcRn5CrmgdYnFvrhQl2rTJtGIGd1uF8x6p0kdwkQL2dTSTxtFwSBS5k0ohqeIdKwDotp8BLFMnaBoXzFg0QY3OQkzkshsXjPa2NqCQlOyudFOztfj4iRoAJTybIfh3iUQrm95EZ316FuYykNd3NQWQK1HHJFP8k6ZociUQ1XrjZMqbrfEDFCUREnwOffDV2vIwrIUz0dCoXcOhEv1vwVo5cZ9yeFU5WVzXtLW8dsImdqahPCxlbiZXdcWqVNVD206qjBqT7gsWlmJ4ZQ6MkVgw0fZpwwRwllue7EoTbuYfdnRzN03AfkwLBGEY6TwNJH3weskXrvPgUrlJyBtGmpMkPsBoufKqizgV4lFOm3GB95fIT5ZECDWuDJQDRcXJ43bWvUFtOcKQgFfrVa4wZ7b8XdoW9weUHMfjGqtcCBWNZqtWtvGU73xFniQ9Ph17u3hDaZ3TMitqvz3F1RZr4LdD2lKZ7Z6LUlD0eKiQxBu1heH3pmNALcveZ0g2iBs0oediw1AtNZ0v0TUmEd2lbPmdTxhvbNFQJi9SgXIDdNxyCIF3UMQDbBI9WlauHs4iylU6gKnDjTOxR874ozXWXh25gKU3pu1o5dORnSoYSOj", 
			Valid: 1, 
			CreateTime: "Tue Jun 12 2018 18:09:37 GMT+0800 (CST)", 
			CreatePerson: "bNN4S4wVC3VLI3T4rXxyudXZcvqq3fkIlS10Cjrbxxb2coy0cAGCC", 
			UpdateTime: "Thu Nov 15 2018 19:31:05 GMT+0800 (CST)", 
			UpdatePerson: "jxdINs35ZNVxH04XJkzJudYz", 

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