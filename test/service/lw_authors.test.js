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
			Name: "hN6zSC5P6ZIFIxaEXi", 
			BirthTime: "Fri Sep 07 2018 17:46:02 GMT+0800 (CST)", 
			Sex: "r", 
			Introduce: "0o6Lp26EStKkGXIyVpus82KWJtlKAF979Q86olgOoq3lFfZLAuvjqsZjbTF9BHH0gB6mOaFeCvQsgigmrzzvgxllHXqVoliSZbD1Vowod1pJJZ1sKtghLvnnDxYiJwtX9aD5C6aaPB812Fp02J79ACtVN4QNky8Et0aBz3K5ST0nCU3z9KlfV7nR9wqHOILDeiQthHHXsYw4zJ7Vv6LxNNGGFdChIBpTlqNjwZO8JWuRS6XjOehTyCL3rPsOtuz8eA2Rc6oCgFbs9yEqSLb6tD7LXJmAQUt5VPZSR1r6GIOQnnBaQKMnkl7U3Dn1vJTIHhf6WNXpoc2LVPznu4KNr4kNsjj4NLJx8tN0tmxEuQ91xMfaR4aJyP9for31CKSnQmXeS9DltCfRbQiurKySHPNocejhgthTZX47USW68qiUUPMRVZ1CNCmPjtGRJWSuY73JK5nwwuOgtAek7pwkJQrH5SuXV8ln0fdz8sh8SmrWcadn8CLb2mXzUDEhqO0EUsqiOoCnOWdXBZyQldb5qpFUxBCTXY4KBLSRIWkTI2mf9IqBX4J0u89c1Z4xA1yt0KuIW8ijA5tMpntvML0jqJszVvnx1gTc9Rlb1xzIgxUJnnCfvDrI0S5bcg97yoOBDcAQynRFhSssjaeAgy8vznRwx2SVNfj01mIO6bVi3CcNnqZ6P7mOzEpBovDQD3u0R8mYe3jciMa2Vn2o8vpYX8cTwA7ZIM4N4yZS4B3TzlvVrQ0K3tYk1uAdIQBJLxxl2RD2um3vrAKxS0NeDioNrU8D6hXEENNei2xDZjf1dQPs3mdDv06clk841hol6P99WNj3nCbft6f0", 
			Valid: 1, 
			CreateTime: "Sun Sep 02 2018 06:56:48 GMT+0800 (CST)", 
			CreatePerson: "m9pP2VAW62ZeSs5G4ggOTHe", 
			UpdateTime: "Tue May 29 2018 09:12:10 GMT+0800 (CST)", 
			UpdatePerson: "w3UuzbC5x6d8zaCjdiJvj633aE70JtGaIbU3arcwxZA2HVk7IsBRn1bRi0v", 

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