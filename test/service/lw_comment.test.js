'use strict';

/**
 * lw_comment
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_comment.js  start...
});

describe('test app/service/lw_comment.js', () => {

    it('should create a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.create({
            Id: Id,
			DynamicId: "dJ6qf5mMIa6m1nCr", 
			Comment: "3PiI0PG2FZy1QvCup9eVUMURpZ0dtr5vBTUKMnDZutdpcRNyFWR0e3wabRt3L5EWI28y2O3SqNJF0IMJCna0DHIQcNNmmq8rNE0rssgEJlEzQBDSv00pn4hqWfxxx8oJ6fxMdmkYpdTQYULlb7GLjx8PcXOIJOXuT6qAr51VPJNo71iVEsFec3z8qgtXjl0Olakp67CqeUV8wS7jrbtNENBuLrjXjL1Yw05shjkQIvJSefCkj5E0nrnYdDtvhBAE4JrmZnX0yTeKgw3U1BRoS35QiUA1zTYIQmSZHx3N1yByx7zh712fjROZIVd4LHaK0cdsgYXcYbARBmqjDEXswFah4CRLjB1s4EbxPbhKgfShhP6nDN83DImUH4h8MS6w1e9pfwZRsBd79UnMJptPa0ERWQ0pUtyc7y8rtbVPpJmecTxdklWAO86yP8eifGQoqHZElkVH9Ji9r1gznOTbjSoky6BHtTeQ0RGyiOYVufPO0AYyQhm1AdpogABttefkHDRxRGxYqdAhWDEpP636XdPkJ4syTTrDktHpoeEAW9VbybjBid3YXjdkT1JqwRfcqEo5F6E0B0wY7Jd69Buo7qHfb0zcFCu8tTGDbgRFRxhEMPnzfaF28TjGO2q5k7YXo8ILbmbkKkyObG4lDTmPLrS", 
			VisitorId: "lHf8AjOp", 
			Province: "g16T2S79tROJw0bokVuCRBxMDmIs6aoerq5Vwdup3iwIMyhJAaOthGQTWI10Bho9t6A", 
			City: "VUcOTQhIjHgVyeoQCKX41dXw", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Thu Sep 06 2018 12:23:34 GMT+0800 (CST)", 
			CreatePerson: "tmSxx1AKZn7Z4d3od9UMQtnOZFAEoF8S4Izc7RRqdvNbV0UuH4sQ", 
			UpdateTime: "Mon Apr 30 2018 15:01:02 GMT+0800 (CST)", 
			UpdatePerson: "RSaQIMGaFxIJsPA3FvgiLoDdGEBhRAEPwK8iUbCoVIiLsoQ5z5IvCnGt974IE54ICbIbHqXCmm04DhtIUpIxe22tdqlvy7un", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwComment.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwComment.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const removeEntity = await ctx.service.lwComment.remove(entity);
        const updateEntity = await ctx.service.lwComment.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_comment entity', async () => {
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
        const entityList = await ctx.service.lwComment.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const result = await ctx.service.lwComment.delete(entity);

        assert(result === 1);
    })

})