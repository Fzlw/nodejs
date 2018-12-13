'use strict';

/**
 * lw_dynamic
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic.js  start...
});

describe('test app/service/lw_dynamic.js', () => {

    it('should create a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.create({
            Id: Id,
			HobbyId: "hRsmqrRsOxHzd2", 
			RelationId: "ZdsZV4XXEnrekkGyE", 
			UserId: "t7UlqTbeDJ", 
			Caption: "iWuiAjSuiR76sydFZm", 
			Province: "1G6INimmXEKxCpgz6qJFh9rbYeb9gOBwGCLLc67Bg4jvQOX4hUiWJKtBpUKzFKLbHuOK82jLJDpgKN9dhziy8lWU", 
			City: "AatI3D30ZVv6drJqSddRodDQyvPtvKIHllskomVbkTSjMRGKAMU8fNOO39WskwyBhAdqOJuTEmUNYDEYCv7c", 
			Valid: 1, 
			CreateTime: "Mon Nov 26 2018 15:54:32 GMT+0800 (CST)", 
			CreatePerson: "IOJOlnKf7YsC9UmyrG8pDDqDq1CfXFXmAgEBlnKhLW9N", 
			UpdateTime: "Fri Mar 23 2018 12:15:58 GMT+0800 (CST)", 
			UpdatePerson: "Tg1zhhmCRpq85i3XDLev2VyZCcmFit9LYMZWak5rl1QdMomNdpDShqa1qNluN9fBWyywa1kAbrYQDKxhaN5wDAFSbd8", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        const removeEntity = await ctx.service.lwDynamic.remove(entity);
        const updateEntity = await ctx.service.lwDynamic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic entity', async () => {
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
        const entityList = await ctx.service.lwDynamic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamic.getById(Id);
        const result = await ctx.service.lwDynamic.delete(entity);

        assert(result === 1);
    })

})