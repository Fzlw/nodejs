'use strict';

/**
 * lw_journey_process
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_journey_process.js  start...
});

describe('test app/service/lw_journey_process.js', () => {

    it('should create a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.create({
            Id: Id,
			PlaceName: "olff3eViNKwBaeFFUufE1uHg6oomv8njjlhGt5I2RVndcIA6erJkcMLlVcX", 
			ArriveTime: "Sat Aug 25 2018 02:50:13 GMT+0800 (CST)", 
			Describe: "vyl8mc3eRKKkPcUcTKTV7DBI77NZAIWuT4sDKaDqHOGMb1HJ8qfZ8eqSfsFT8NPTXHA7LvHl6oHqIb3oLKackddvGMQ4L9dQbUjU8sib5tjv0Qu1UUdxlhiUoIBhezoMYdWdqr2Bvr0umeAigDoR4wefyKkfM6YD5ret2cb4GNCULNDIrWc4gSAqTLJlIX5sMhjM8X8hfKJJTLqupBhJNmfheUFGFU092zPLkEyDvCIQZfkl0rCUVN5oPQMxIaP3MVYa53umoqVRsBJj9uCvPlsjYgD974fVFY2AqVhxYzXMZsT5jaQjlHUaeObmPqh8D9rDERe5woPSwoc0KCAgvJjD4V35Fpmy8CZCnJpk5Xrf091jY4o8w3QAMnItmHexqZxaktT", 
			ImgsId: "GYlUgJl8ggTJFVhfglsF9AmiNXHDHz8uWyF24nW2HppfBLLPP96wAmcdx2p9xPyAnsBzfPn", 
			Valid: 1, 
			CreateTime: "Sat Apr 07 2018 11:06:15 GMT+0800 (CST)", 
			CreatePerson: "UdB51QMjm5MIs6PzepGOxaZykDOd2DawlNaKwa1c86", 
			UpdateTime: "Fri Aug 17 2018 15:41:49 GMT+0800 (CST)", 
			UpdatePerson: "2UKwgjf7ees0XfPTsNRHcjpqjACntEfGSmwchnU6xX4GvuJbuh81QHpEKzlhiXsqtwN08iguXOZ0aMn63L9PRn", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwJourneyProcess.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwJourneyProcess.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        const removeEntity = await ctx.service.lwJourneyProcess.remove(entity);
        const updateEntity = await ctx.service.lwJourneyProcess.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_journey_process entity', async () => {
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
        const entityList = await ctx.service.lwJourneyProcess.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        const result = await ctx.service.lwJourneyProcess.delete(entity);

        assert(result === 1);
    })

})