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
			JourneyId: "qG1rsTOBc", 
			Province: "ERW1LrgBwODxakPfqB7KUs6VLCCNoeGo7xJ2iJf0QFIY60oHMZog1H61zJjbakWqaGy6seO6M1wr", 
			City: "DV9qcnyUUEtmlceS5bb7FvXd4t8tnFATHI6bsGZteFbRqToUDL9ErM", 
			PlaceName: "uDk6XRcooR1XjZ2lNujODFOI3U0c60v8hN4Nh3gxCa7pCxqIhVlGnvPB8MOG42YLzG8BENkfcxXoSp3Qzgpeu6eCYDhgicj", 
			ArriveTime: "Wed Dec 05 2018 11:51:06 GMT+0800 (CST)", 
			Describe: "tdcE0lDQFiy9AS1MEOrusG5nro0voHdMI0qZEhkvQwG1gGI2olmovSnabM7a05xiNJ97BTVizsf9l8LTk4NnDBpilnPaLvrl4V6up6S7jPgIgj3NyfOLz4QevhH9xBikIJVHHDaoFfTaYoZNf7cROzPhCPXQochDTTpXJMJbGbhbDCoikxyvkzQoCOkvGxTKVUVnl7MhDjeba73Fu63RB2Zey5mjR9ajge2EDtoeNjY92z96Y6SjTYtRUZj7vLgedrsbGfgNDksn35AfX9JBvcCdmcMaO2zKu7SYHqD89j8uR6ns9zYaf6HyoLWChZJPnKND2qvocB9YbufKjGxw5rs2VJlnwMKb3Cd2t6iE396yhTErpaWX3TVaz2PPt8tonsC4z09jBPBDdDGKnM3jpPAVDu0MrwJnW0nZc0VSuBAEbFAflY81ihdhgg8cQQw9gBeSo2rCnYLpJLR2jLEJS1C80xOHGbDhppfSAyc5PjBwTuwvxRPuSCApAICE3CdSjM98KdcXjrYPghzdsC3Z83hgUPwAk7yo1VN0aINiOkHRtzzMP9vmNbToipwGT8WjPWKJvJBgEV7CMdHrBd310nS8jrJ4ICbYhSjWl84fQPHwvyfB5PSWDBETomwVIFSqPxyJ4XPLzcVFnapsPhFzbFNgrYjpuT51pQBgme34YZYalNLH2W2555l3dd6NbgqJnBreh5YObySIIBiF5AOD2vHdWIpsln4zgVNWL6dU2he9ujWYH0gMDnr9auhFEac9SV1q5MK1hjW7Sf9Xv336TSs3tdmD8XFckzxE1BZGlH1uP2HZ6Q7K8piGrZUIh2ty1iqwtV6knpqtFdWHtakUfk2j7oIXF6YhNFzLkV9cMPJ7g5autUF3ttd1BQcUUHOUGTaqVG3xgvTrAVl2LgyLIa9seu", 
			ImgsId: "DSteeu", 
			Valid: 1, 
			CreateTime: "Mon May 07 2018 14:27:11 GMT+0800 (CST)", 
			CreatePerson: "9hjBKFeHcrVj5YGDiRoeOtxP24rLiBuO", 
			UpdateTime: "Mon Dec 10 2018 12:36:41 GMT+0800 (CST)", 
			UpdatePerson: "UMHSpqUPfaj2tmZSBRNF3xDBuNO4cYAXGzWXSlPBjUpy4o9iP", 

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