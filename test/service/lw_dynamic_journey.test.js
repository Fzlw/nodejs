'use strict';

/**
 * lw_dynamic_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_journey.js  start...
});

describe('test app/service/lw_dynamic_journey.js', () => {

    it('should create a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.create({
            Id: Id,
			StartTime: "Wed Feb 14 2018 09:06:53 GMT+0800 (CST)", 
			EndTime: "Thu Sep 27 2018 19:22:06 GMT+0800 (CST)", 
			PointOfStart: "IARmfGoyGV9mQ5nUQbkIIHISMKwhx7NO4EJAUriMFLtidLK15iE6VN19lM6vXIHuJznbxtlurHPwQN0zWe4", 
			PointOfEnd: "ngmqWU4jjRPU49sv4ndPmZvCNZG1xObB8NTLfz2rGlaX9APj8LaUa0lX5Gyee4uh2YXIhE95kews8q1pKHg7R16yNSMm2AptSaYn", 
			ImgGroupId: "5DL0zxKuAIvRf6", 
			Describe: "pgjEwmreJEAQ8MXbc88d86WQnFZ01X58j4TFN0QpRDhQUSwYt4GSTekfXiiq9b0vZdWnZ36nZYFwVuWsLF5R0Jw860FGuM8EwfpS4CAlVEGtZRqGbBODvlc5qAM0m22Cqj7Q4OjDQGeW60S86mZSm3GgwY6jWosqndtW7oRoddDAKPyVu29rvHx1uV9234ulUXzsriLH35lGHdkrCZtQPrrf6gIHT0TuMDKXrpUZuyksQBdGKJf4NLPf9BxUdvSAYEvpbPtBA5K9shZTDhNJqQtUPC1E4wgEFILI7kTLrOZyf31qGa6aHTRZWAMXCpA9ds4wMBmsz3KzYljrUtIt0Twq990vBBouZjkZoIVSgAsOLqdZrEHGtSXZP7UrKDU6ECzSl6Nbalt1PhL4aBIIhDBmgvXUYUzKLmM7hqnNce6wiB7v5QqYYLv1knBsCpBt425ZEg0K07MAmh0evkGcnw7kUwsL51yahtUygSYnGK5tnNV1FnFaS6mX4RjpzFPTVR0EcJ1tloi2yNgK0lPCAyfsm6x1HYgfmQ78UXkUNC9Rue2xX9ZaBuQSwWuY7iVh8OI8AudZd1eGZTypHL7WR2y17HGrSehefkfuODYpLYeaiyT4YWQ6A9clRDeP099OdQdZo52d", 
			Remark: "JzP", 
			Valid: 1, 
			CreateTime: "Thu Jan 04 2018 17:23:31 GMT+0800 (CST)", 
			CreatePerson: "AfV4c", 
			UpdateTime: "Sat Dec 08 2018 16:15:48 GMT+0800 (CST)", 
			UpdatePerson: "LZvzP3OUlCFLQCUVsK5kHJ9jXKMfE32hCnrDBTBERWdg82hH6yEvU8ZyeBFtmkSjpu", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const removeEntity = await ctx.service.lwDynamicJourney.remove(entity);
        const updateEntity = await ctx.service.lwDynamicJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_journey entity', async () => {
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
        const entityList = await ctx.service.lwDynamicJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const result = await ctx.service.lwDynamicJourney.delete(entity);

        assert(result === 1);
    })

})