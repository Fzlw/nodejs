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
			StartTime: "Sat Nov 03 2018 03:42:38 GMT+0800 (CST)", 
			EndTime: "Wed Mar 21 2018 12:31:43 GMT+0800 (CST)", 
			PointOfStart: "hoPGN7MT", 
			PointOfEnd: "UYCLZMSljhC3aWdDmaQaXFU7QmInAt7noINc1VJL3PTFSDDQ0ePUmTCAaJHhqMWQEhBoAHzPIQY", 
			ImgGroupId: "FakkGU", 
			Describe: "829yGDvMGesQqKPTCJkdLyAO9pYqqTk0D9DNGgjjRVzelbQcGq5BnTzUbGPEH8noN2vGa5bBdipVI5SIh4dTMox6fUL7ac7DKDH2RRpR3j5Wyo6i2tOatvddvlZnRhYudQxJg", 
			Remark: "lMsvWhClFRok6cuwEIiiY4WYuDd5KA0A", 
			Valid: 1, 
			CreateTime: "Sun Dec 09 2018 20:24:53 GMT+0800 (CST)", 
			CreatePerson: "jo62RHCNHSbI4EVPDb8BPdIcraHDonwowj7jPjF9S3azoSGCr95Y2MH1YN6tX4nuSfDFGiK3boPBt732vMPyN", 
			UpdateTime: "Sun Feb 18 2018 09:58:45 GMT+0800 (CST)", 
			UpdatePerson: "ddXIXvdYGhVqaqOIGvnC7pUKzUlAMkgjTZcv1s", 

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