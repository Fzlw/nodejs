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
			JourneyId: "ch8MBd6YBHP2d6iEa", 
			Province: "o3TIpQlzL8PF75qjxQxHyg42eqP710xFmbGXSvQHDPRVALWr036W5eobj7M01XmH2Q", 
			City: "NE", 
			PlaceName: "sNX3OrFR", 
			ArriveTime: "Thu Sep 20 2018 14:07:36 GMT+0800 (CST)", 
			Describe: "PuTYwPCks3tHkW4lUIhkOne5C8ej3lunpvvKjoH05vQyoFUyx24IIetr8IVTE3npdKczqfcU7E5eYngmSZC7cSsmfgiaX63g452ZfTI2atZJnPSE0wbWHyEdeWJa3AaytefglFmGQ2pMW9rFlizf27wUBHZhzeaOjhBCA2fvb3a37MovyyPchSBxqoP8ONuNeuycWqDqNApIJT2uBZCEyc5Qbaqj2sQSPScjr0YoxYGX7D3zp1yqkn5gQM1BnLrce0dyvZHT76JrLuYeYTVRqADvitfO2odWANhX0kwZsxVkCcbVf2q1JvsaaK3HSFST0BJmRVOByuNmc0gYHzoRRu6TltSZIXrUqTZnyZKxDkf2ABiTMweiAox3ouuYSOxnXo0yDnfeQOvYSKaMBNKKmibIPmPHsoVDVd2zA0yUMW4G7UQ9hERsaBG2O3p15dzGM7QMBvU33YpDMDUaede2Cy6q7hFl7JbT3TmfaIoV57juGuPzjot7aSdbd7sFxINmqVbTifPd8vCa0W7JJtpKjdBWyjXRgYlikmvIR4OHoqkp8nRc7HJdHPYqSPF5pwFqnShoKlnkMfyfZkpTT89Fdppn6tvERr97irvZ1f3ky0Uva1z9zDlSeoGC6Gu49gayLVMLMNxWGauXSikIH8a55brntmFri3pSpLNuqr0KICq21b8PYz4bDM77sydT1nZFuMLqKoQy5fNvuz8nBRgzSXcyq3XGWzA4PNKGBvA8QuxAR109eJLGx1No2VjALZ0PhnCyermdVUsxKce7tEJHs1LIj8bDvOpK4HI8QPwNISsE9qtuUDZINOX4ibyqwWx8uBwC4GDQhC08YioYU8ax2GuIGi6DwgTW0suogGFlrcpE1u5zKd0Pa4NGJA9q3MOBTMhoDhF1Zoe", 
			ImgsId: "K2kg0z4Cxr6hWQu9lb1yPxRfZNQuudoiQWU3LO8lLjhQuZne0ovN3yLAVKso0ByiXZmadrW2tvQjTShKNR", 
			Valid: 1, 
			CreateTime: "Fri Jun 01 2018 08:40:00 GMT+0800 (CST)", 
			CreatePerson: "7MeHo4CYH69UjEmXMyHWeGSSWv3SIxBbnndCTVVJzWLF4D4sH6Al0iGiRBbtKg0B2G", 
			UpdateTime: "Wed Feb 14 2018 21:40:24 GMT+0800 (CST)", 
			UpdatePerson: "efYqoa3B", 

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