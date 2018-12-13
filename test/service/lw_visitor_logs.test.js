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
			UserId: "05YVs", 
			IP: "hPwT2nphGuoGJ4", 
			LandTime: "Wed Apr 25 2018 12:00:18 GMT+0800 (CST)", 
			Province: "AAIWwFk5esu5a5jK6ubhJJfZTMqxLzDLxQ6c7xNbPoZRW4Yjr7ERhMS6N2IT448vKflr7pjbms8cEhH0l", 
			City: "1TUpIVsu7qWJTF4gaMZ6yFuFQXc0vAXaPBUDCvCdQyt1vdvNQ5wwxf54Z7CadZJL7tgwyt", 
			UserAgent: "tWJadBrN1QaqwP2zloaamuQban13EEoE6rIHV58C12bUsgl5sMU1qyN0jEzIjhrJT1K1qrr7siNcWdHj21GCLxdE3pwpMgOaeAN9c9EmpJeQRHcNLwqOxFyVKokoFoS5VMjj8XZnikdfQqQpdk0l12NHZsbZZG0EjdVDbp0PQFlyOkuNNwj2CHQxDqjgmmFebAuKgwmAtlOyhhPHDcuHAwcqOWDiu3ZoJJR59ApwCmwPpqQ6YDqqQ7FSI3OvD1b1wG3uoGoFMeOUvnqD421myDF7HNHEorm2dzokJ5DjKRbAKLWkdBNNS5RzF6XyjdpBJBg9Y81r2ZxhFERo3MMxq0vtmHg1yBRRjscfwOvOs980I3CZsw91EnZLN17DijL6YiKuL2CFQJrX3Is6dtEWj7Bu7p9K6UdXsTzcanDvPX9raldr0iZ7zOgjiiF4yZ4XvkPFcAMGoWEFB9Cs0LBIrpw2YSx90QxnZ7vzLB7XLHfFVJlIg9rbtmkNO3NL1txXmYLqLpQ8LNZC8783wIwu58j1z1ctIforZXphX46FV2wx7p5bG48so99Mn1exsypb5hoo7hTTOzBvWPQmbvWfUp3Fto8JLGCHcGsbM20ZWmWidCF2w5Y3OrHvNVSElcrXsY6PluKYuZDz9vXTyPmOx0hcvGemWurkgn19l0", 
			WebBrowser: "sfSJ6nBN3PVwPVnoea6UdUtgeB7nICDHZAB", 
			WebBrowserVersion: "MYs8pj", 
			Valid: 1, 
			CreateTime: "Mon Oct 08 2018 00:36:16 GMT+0800 (CST)", 
			CreatePerson: "UmRD", 
			UpdateTime: "Tue Oct 09 2018 18:49:00 GMT+0800 (CST)", 
			UpdatePerson: "AOCa7R0fhnIi6sj3E764JoADq3cTpWodaOy1tcg6BMuy2wdccUUxAvnh4IQS5N3rv", 

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

        oldEntity.CreatePerson = 'anto-update value';
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