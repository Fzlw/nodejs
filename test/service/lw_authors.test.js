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
			Name: "hrWuZ", 
			BirthTime: "Mon Dec 11 2017 05:27:58 GMT+0800 (CST)", 
			Sex: "J", 
			Introduce: "83ioKscult7svy9ztBWcnmweEUES6ny41W7rRVZkM1Y7X00W5Y61XVOQ0ClW5ImZBjFCceks27KOLLNPV9BuTrXQ6gMaaADXihQnvHTZ2n5rQmV6deNIu8IrlP7VsCLf2IKBgtaLc7by8hXtEFoGoyydeVp2Q8AidxM73FYgy1AlcjfQWupcsplTTQHmuRDk0VnYCLbIoOt9YHMzGlAtIUNfr1JFJv6az7BfJpVCeJFCHUWbLHWX2vaJsboKL0DHuXJoKSlSJfOHo57337eDfGBcbzfVDgseQFiYc9s4Chy0Ft3YeYkG1TJNfwlSnBT4wl85WTY0e393aLXZ64WbDa0sS1y4QLDO0mFb5H7CLBjvxljx53yxGsPAWo0mlgsvduJdYuclOUHzOPbUPf3LUsuskJyaUzYBiboxJev1IkL3PbVSdrRGmJ9gT1mbLAK8f2AvQ98pcKolKz3XIW5ACHIdDuzYxLIO2eBvbVMUDQG6MZxIIl0kuEanxamYpJH3FePW3S7hvSggyzIBo1HZSrQeUf9PDfjfmSvuLZTiYghYy4giC9YKLnlvRIyrvFrJOIl9rE8mo7iwPEWeVwYOjNTv5EcWSe3A03bpJOnjVsrh9aJyE0h5AQQeKRDXVVu6WyeUm6n3WDvUtbgTDQ6HJjxrhGQ7XGl3yeGq1zPVjjZQAI1PuAjA7GDwbjLKTYZhS1y6QHwuEVBgRlCZzQXNiiDiNdbGcIt8uaGxzFpa5BFt5ZLZhWHOSb7iY92XBhtGaG88bUZ5bRB5WRLPQJAwbJ4CaH3wftG96hVJHVZjeTXqBajvcllvJvb6Z1nFXjYlycCA36HrT4IHrXVgirxgHMAZkQFACGYHQteAOTtFRqye53txAv07thzzuGi2WuxddcUyoiOqcHHFSEijpTruXtTeMYkTLqTyDZ1jOLOBEY7MGqIOQo50GqrejGskciWeHN9B7fXeb6jkP4Qans76cWKS8h31SnkuBKZr9t8SOxqOjN4Um45fxagV72G2X66VhAX5WQ2ok22nOOBqvjAuzbZ4Iqab", 
			Valid: 1, 
			CreateTime: "Tue Nov 13 2018 15:28:50 GMT+0800 (CST)", 
			CreatePerson: "z0RR7sm7I8y7RWiHyZvDM11ckwUawZGQGXv4qeTUfbxq7Znmveh2I2Pif95ujkzyxDoPjUYF3R9F2r6Vu", 
			UpdateTime: "Tue Nov 06 2018 12:54:35 GMT+0800 (CST)", 
			UpdatePerson: "XbXVALCA4", 

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