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
			StartTime: "Tue Mar 27 2018 20:24:15 GMT+0800 (CST)", 
			EndTime: "Tue Oct 30 2018 11:15:14 GMT+0800 (CST)", 
			PointOfStart: "Tzvw9", 
			PointOfEnd: "aFZ4daqtt0f70selkhI1jCbhoP10ZVoT5LNfStdrV36I3oO0cqcfCVTcj0xgacYSWepMmheu8u6DY0FYWephRvQ5X7wM", 
			JourneyId: "24RV4ddBuM51Yw8pV", 
			ImgGroupId: "5VtHuCFHH", 
			Describe: "moeri8SxD3EASpt2ngReFFRh1bry2JweXOzxO2oxvrCusbGubSYsuaMzCisp76r3upLHvlli4o00yD7hQ4zbFxcEy4XiwwcFYU05JttsN5j4fqYEV7coS1R7ckdgfMfcSTqzZgeEgYpqTH5Nz94vozdtEutnEedi6jYwoh6v44rABuR4pcS6BDCAUEeVQzhzMRP8tcX02xMYtWxm9AT", 
			Remark: "JzULos564LBJ30ajs1WKK6gCv", 
			Valid: 1, 
			CreateTime: "Sun Aug 19 2018 06:45:38 GMT+0800 (CST)", 
			CreatePerson: "lCNbbM68btIwkUkDaCdG78xLm8gI", 
			UpdateTime: "Fri Feb 16 2018 22:38:48 GMT+0800 (CST)", 
			UpdatePerson: "VlBVTdRiAUDvxjbZlVVk6udd7U2Pqd1vdsJSBY9g6MfPf0Ux3Wt7D9Qh21I7", 

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