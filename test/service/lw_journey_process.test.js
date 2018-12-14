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
			JourneyId: "qB4Sb", 
			Province: "ocVg2X1nMYLBgXx6kxMY", 
			City: "fq2U6dSrVB6dpQcjk2g9r6EpNjOa4MLmPxbLLUV5zQQeZ9tedCJ9eKkyCKvnZQqbLawtit6WUgzpGQbIYbaVG7EKKqzsKlTa07l", 
			PlaceName: "L2FWy2ppcy9EfjfvYCjVcd8iI93K27rZCaTi2r4EmJpSPay3WLdaoZdTfOAgv7CSs2Fae1I6m5JR", 
			ArriveTime: "Sun Apr 01 2018 18:50:43 GMT+0800 (CST)", 
			Describe: "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", 
			ImgsId: "cBjAnppJhgiS2ZVMbAwJmZPr95x4F77rJTWnUduHb7ACNSGjGLWhsE5uSC3lxQsEaQ7Du6ckbRplLlF2FdXfFw2NXfd", 
			Valid: 1, 
			CreateTime: "Mon Mar 26 2018 01:11:17 GMT+0800 (CST)", 
			CreatePerson: "PsDAF1RIXEC38qjqIvkImIW1yvies4Uo2cb7a03drSEVQHUedf03zCpiW", 
			UpdateTime: "Thu Jan 18 2018 23:37:36 GMT+0800 (CST)", 
			UpdatePerson: "Qd5RaoBcoAwi9hLQAxr8RxGhB", 

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