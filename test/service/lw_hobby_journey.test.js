'use strict';

/**
 * lw_hobby_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby_journey.js  start...
});

describe('test app/service/lw_hobby_journey.js', () => {

    it('should create a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.create({
            Id: Id,
			StartTime: "Mon Feb 05 2018 23:27:18 GMT+0800 (CST)", 
			EndTime: "Fri Apr 27 2018 09:38:45 GMT+0800 (CST)", 
			PointOfStart: "PEJtL5yXUJ3FwX4v5HZIplQFMSKoWp8DTna9bCcaKTo8xUEf87WLtzpRQyhSocFZ0szwPcFB", 
			PointOfEnd: "IiZa", 
			JourneyId: "Cc", 
			ImgGroupId: "QIuFwHNRDSBTz156", 
			Describe: "FNvqYfokljYam3wGbDWzaiVyaWj9qpRvcXcAX1dkhgVavJkEzifUOwknoV60RjHkvreZM5E37ZMElZ9Z25jW0YMfQOHXxrVtdDA0sLV9AnjzCh1ynBvVVnbjRJ0C21XpG5I94ozgPm8pnkPXEQBlheoBZ5PeSKpoocxxVmHwJPew", 
			Remark: "febHJmb0RlyRj8pmWEd8vDtz8Re42wqNpE", 
			Valid: 1, 
			CreateTime: "Mon Nov 19 2018 11:54:00 GMT+0800 (CST)", 
			CreatePerson: "UXifGqs1zfoPyFS3YBpvZpD82Zhc8cFHRwn8SrezqvPvx", 
			UpdateTime: "Sat Jan 20 2018 13:07:43 GMT+0800 (CST)", 
			UpdatePerson: "NjkcVFcapfp5K3Cnd99xnin5cXBI0M3tn", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobbyJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const removeEntity = await ctx.service.lwHobbyJourney.remove(entity);
        const updateEntity = await ctx.service.lwHobbyJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby_journey entity', async () => {
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
        const entityList = await ctx.service.lwHobbyJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const result = await ctx.service.lwHobbyJourney.delete(entity);

        assert(result === 1);
    })

})