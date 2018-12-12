'use strict';

/**
 * lw_visitor_logs
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_logs.js  start...
});

describe('test app/service/lw_visitor_logs.js', () => {

    it('should create a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.create({
            Id: Id,
			UserId: "M8qz0Lh", 
			IP: "Iv7E7F1zdMpw", 
			LandTime: "Fri Jul 13 2018 20:42:28 GMT+0800 (CST)", 
			Position: "BbasXAD8hKyE6LP8Rilib8xuutSRvwsTUgzZ35pHod4CETK7GU05O4mm0aUxZwyT", 
			UserAgent: "V8nttSx3gRwbBedtWh5mUgEdyDevZuqkZ8lmzxzquJlUKlSsdjzpSk6ZMD2Bvbaj73Cnl3lK9aObrwDBzKMYZUg9ECrtgTogNoiKaDobwIqJGdktN6ZcunYMC5GwESwXb0IFu9s9PpTzEFhcOatzyxUfeRJCYw0TkuoiBcvHLU8RyxqasieAecwNJPsoSeR7esyAOhdA3zDEw2FoRFunGdBYk4Vc1uI8zAnqfav36q3xOeFOuQmGtGz0pdmcXUnPEpycDMOEv1gmAG670uCSAKi7GQXl3mLJpzzrUxGzAxrUmaxNhzHxd48QqzJXctIr5LuX28exXIvBOHpryAzCrjeTxx0q8kNnwtM9WBfX9gzCj3q3dvD16fqHVyZMaR3jgOvL6vcmZ27DDpmq9sKlqAFtQp3VcMgwj1mLtRoWQFvHwUpHZyYYeRwLrOvpM7AHWOPIUOLRfRlvOm40R6xGOlLaC3UKND3o48CrvpVSTM5fxnoDgzeJcxgbjGoXNxD54kz07VIzLVj4NJ5AXsUh80AkaowtscDowKTNyc2SW6f4kFtqIGdzliDggoHo83JqofI5NYjuw2lD99Dmv3nchSmmnctAoVAJBlW8Z3vUgy2rQvSR8e6UHAMoi7oGYIWK27jr3ZuWBgzoS4w8MdowvwOyQsl0cXKA1mt1547XGXUPA7FmoDFQ6u8vuaK9Wpn9UyMNDDqOePMojBIFCYgEv0K7wE9cFy0KDjs2lPDnaE2Cp6F30v7F01Ii69vprdW41U1meyVY5W4XGhAo2BMR0qe", 
			WebBrowser: "o9JXiTawyObJo9HIYhsKg5a7SqIFmVNr4isa10uHn", 
			WebBrowserVersion: "DkrFfJJcdNBKWOO9", 
			Valid: 1, 
			CreateTime: "Sun Dec 09 2018 19:52:25 GMT+0800 (CST)", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity. = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorLogs.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const removeEntity = await ctx.service.lwVisitorLogs.remove(entity);
        const updateEntity = await ctx.service.lwVisitorLogs.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_logs entity', async () => {
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
        const entityList = await ctx.service.lwVisitorLogs.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const result = await ctx.service.lwVisitorLogs.delete(entity);

        assert(result === 1);
    })

})