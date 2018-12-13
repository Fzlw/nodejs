'use strict';

/**
 * sysperson
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/sysperson.js  start...
});

describe('test app/service/sysperson.js', () => {

    it('should create a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.create({
            Id: Id,
			Name: "7p1Z4C7TqZf7hJ2DWy5sJbj4", 
			LoginName: "ENajWcBCvBm", 
			Password: "8LQzxdZ8qKxHXRlYdrvPSHy1wQGU1aDDtm8OOS9OwDbwtFGGurHOgChLNQ6QNzmE5XpFePCIBNZ8PFiJW7Q12rQVkoao0likDuoOzX4LWXCECkIgVMoCeWghpFSDedZwGhHs8g9txIFnJ8031RhdExhwf3W3IsxOtGwW2Z2guBJnqPimMqIr4YQ2h40p", 
			Sex: "s", 
			RegisterTime: "Sat Dec 16 2017 09:01:22 GMT+0800 (CST)", 
			Province: "7lKX3rUTyUbtyM5O6LOLPsNrsbTG4WjMk5rUlxUABlH2c6WnLBwyCi3UvdW3KBqJfBF3m2MvvW2Iz9zzt5WCPlNMKZ7sJh", 
			City: "jorQBxwkopsvWxmZdB0rrkXBN5QR76wbbKvg8cdcCAt", 
			Introduce: "tf6IHNivwpp7tsKWoIBy1JU31SE6R0eBLZ3LH1DpvvGvBgkO1sw2k2e7twErPKU8fmKJvMX7Z6s9", 
			Position: "04uM71dgK4zFhOsrNbk6UKDUvetiO4TeKjI1OPpqcmcErR5ls8oK5BtZFnqXSL2miPrls2Z7fasfUgcKQ", 
			HDpic: "6kxHWTAidsVt0LFwiRICTFJ8kk", 
			Valid: 1, 
			CreateTime: "Fri Sep 14 2018 23:17:12 GMT+0800 (CST)", 
			CreatePerson: "EFRcX0fnrdTmzKcptr6dkDnmETL8V25MbVZLiWfMFByVkk9Ifpgp3w4YC5T9sXr3lldJVQmBGb5D4lJcfvxRHX7OPiK3kld6", 
			UpdateTime: "Mon May 07 2018 06:10:49 GMT+0800 (CST)", 
			UpdatePerson: "1HwqiOjgISGabcQiOKbpP9J", 

        });
        assert(entity.Id === Id);
    })

    it('should get a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a sysperson entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.sysperson.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.sysperson.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const removeEntity = await ctx.service.sysperson.remove(entity);
        const updateEntity = await ctx.service.sysperson.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of sysperson entity', async () => {
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
        const entityList = await ctx.service.sysperson.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const result = await ctx.service.sysperson.delete(entity);

        assert(result === 1);
    })

})