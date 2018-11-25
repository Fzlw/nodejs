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
			PlaceName: "og", 
			ArriveTime: "Mon Feb 19 2018 02:51:05 GMT+0800 (CST)", 
			Describe: "lJ94tIpm0A6gpnsV2s8s0H7QvXCWP6tkMz92GK59hcpEqc2WNmlcwNpApDRaxBdHwVsICPTSI3Anfmlh5X7j0UacCerzlpigvz5rqKK8zqtVsV8PHSd2gDl7w9mGYVWo6Q5S5hcTVbqQFyWKXhWnk6WGzRiH1cAraJCCYreFcZLteYzXivGEVX7qMleR7n28C58QNOEtnwKTCzCEIx0c84vvHPyPpuZFSdUWEl47Xp6nI40woJvqt2lVoj2cxZigPSY2oW9QY9YdQdBDqDtrmTdPm2fPlWc0dbbjlYRie9jRDZ6yubwu84jjwzDqzNUb1V722OSjAiR1JHPAnlouxO72LtR2AUwNfZehdibkGz9IT7Ax7Z3ZyQxmLK9U3fr88RUIb6rkojSCfpI2y35U0zwR04epRWGTVcfLNh17VazPCpkCnecTKzNEB6gZ7FHgLVsj2pp07Unk1FTxKLE3gY4Hv0qyC6BNOcISghhzc5MluzHPbawSFN08Br1KLYzVBO4QFD8tawEeXphqfFJCk6ehEwUxCZc3J7EmT6VE5nUC9NDrVq4DaYOL8pKJK6ShkP7MJGP8YPlQlG0gSmHpDOBNCJbzj4nNYxaaGOLPVgxdASr1GB5uie1mRN40GwMt2xEZfNxIHI2YVa3AbZDMwXXzw86OsGQYhJslPimGX1HVh87LFXcVIKQ2L0wSaMjOrDZ4tCkC4AtQJUuswKyjTbAXCqlVvsE1GcuZYvD7s3ya0pnUWRo6Avi2mV2dSfPEXbx8tp5PVho9rNPkwL4RiTtCSRvkm7pDRM", 
			ImgsId: "VRv3T8GQjVsqHZnSZjqeniXFsxPrhWSmNWGbp7IE6QrH438UQJbRm8FG0NWfRbbvwmc5fdqH9jcxsKGP2CgEvX5LgnTjTQD", 
			Valid: 1, 
			CreateTime: "Sat Aug 11 2018 13:07:18 GMT+0800 (CST)", 
			CreatePerson: "caDUMH8JIRod4esGBLDC1SnfNpkRxn8WyjJ4jTHQs873G65jeaSEtxsWiymUacN8fklnxJcrr1Fsq4V2qpP", 
			UpdateTime: "Sat Mar 03 2018 06:23:14 GMT+0800 (CST)", 
			UpdatePerson: "BXzQBYqNeaOV2x4uaDT13qbpH7pR0SaDn6Z0oFTpSu", 

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