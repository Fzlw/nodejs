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
			Name: "6Zv9SFYqOqgnMGqGRiPb", 
			LoginName: "R6kBUYMlS6r", 
			Password: "mXF4tTugIhCM0Dj3mYepDpMIZ5tZOD12OR1Sc3w7SgIbYtKTIPF8QoMym9UzM2W1ycLVfdN9N7fGdu5IUzr9IwDpzQAcXLzvq5efKIsWIINgnQwRJsWmMIlbFLo6BNbz0ZL5rTyisAPF52LVHzYidA5LJakGVgJxJ7X1Q4REvSUqnERxkmGRsnPnO5MiLFzOqNYiEUXEoQBkWAtDWR4H7N3ePj03l8LpUGGXPpNT1onamQAfq8SUYIUohj", 
			Sex: "2", 
			RegisterTime: "Thu Apr 12 2018 02:32:19 GMT+0800 (CST)", 
			Province: "DuEgUGrZuEJO30pYk4zwICbdUOQ25lPBuetJC6Qt5TF8LVNyvFG4at3a87EzGSt3Y44oTLSuBc0GdXja4dU", 
			City: "8i3UgoWRwqCJvYvkYisclAvrv5uPD0PDOePXWBZzYIENmhKcF3B8NWsq8Bd6Gk", 
			Introduce: "kla42b9srvl", 
			Position: "9", 
			HDpic: "FW45x7Yz91ursHNfVW5xDvNRLZM", 
			ContactWayId: "98X5TwQ2o0", 
			Valid: 1, 
			CreateTime: "Thu Apr 12 2018 17:10:51 GMT+0800 (CST)", 
			CreatePerson: "tOSWXTueZZ1RCKJJdXEp72CIrHXSXRJR6LX17ue9Io9fiLlUEwPJQH5Im9s6iOWBIeSQMQBf", 
			UpdateTime: "Sun Jan 28 2018 07:45:13 GMT+0800 (CST)", 
			UpdatePerson: "Laaep1cSqlKHp0BSQCkaAgfqSonT1oOCNYJdjV6AybuS1UtctaDF91jRmRHQwB", 

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