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
			StartTime: "Thu Jun 14 2018 01:47:48 GMT+0800 (CST)", 
			EndTime: "Sun Jul 01 2018 13:27:49 GMT+0800 (CST)", 
			PointOfStart: "ytKyU2iK2kp7nEDC8", 
			PointOfEnd: "0qs19acug0oVw", 
			JourneyId: "m1r", 
			ImgGroupId: "wTKGKxkfX0Gk26H", 
			Describe: "H3ZHbG4ULCplNCyyy6t1dYvyzIsV9esqKvYaJGhAmwkZn2uCf02FCMCxto7TlWbovg8kyHo4KzQowhN2E8gDjSdYwHAsfjSUNzX3dgdsHf8P4NWHtzcWdVst4AKnd0bcoFujLtnYdjjVThbKvLVfo8tHsED2xoGuLfinesvbtsk8GeBfasFWHwcfSLiLKHu6j0auolFquft0UThZjQT2JYSouC2OK9gMnFyOV7cYsm1SHAkjGvHakkb8ZD1RYKFLzo4xP1gZfpHDu4TN5GeKvp0vWcLz2t8XLX97zdgMHHJDtJTcgaboPYHz9fxyFGNqB6qnUYCxpo9JnfJbEme8tkBJRUr5t9UcKW524vcLmL13IMGtz4GjEtDwa0wgfRm9VatogU5bihslpXEuFXAvU6Sx8JMte0ZUTQxiitHgG694AbiUFQyKV0F5f1RaBzG9iLlLgACm8pnegdwjOh6N59cDDTGDPJxF8mLv6XPyoVi5C9wFRDBHCZGxO6X5DaDRXEsgebKecXS3zPXHbK1kt3tCLgG73Z8e4lVVjY6VoLaXVn9q5FTfm5a2Rz3HX6sp2DdVRWJREyatZCPz8CpJRDCQ72awT269t5P2mmVwH5Dk2wMSfrqabSysMgQkNgrs7yveiPLzyOAJVpFlCosrMAdEzD4a4Iij3I6S6qAEMOECt8hPKJRhJx37xUUTZMret2XDORG21nNiZhbmem0knwzE4C7yF6JCMDqXIYpA0QIWwBoWC9eZYD1HI5AHs1ZjEoToVI5eM6HzngUCbaGhMILnLJIi8gAfmcvvbtnqHzIKgbUSwxruNIrgBGI0wDDwWnJcLfMIs2GY7fr", 
			Remark: "BGM739TH3hooIFETC9ouAOZikOhFyp6k71Va2Ziks", 
			Valid: 1, 
			CreateTime: "Fri Jun 29 2018 10:23:44 GMT+0800 (CST)", 
			CreatePerson: "zOF0S5EYkqgUMYkZoxxJZDo0rJZEygvsiSuP66sxIgPQVOyIMu4ovazpLAKS0x1YKipoNm3RCEzc2wfMvDg7GZ", 
			UpdateTime: "Thu Feb 22 2018 23:17:06 GMT+0800 (CST)", 
			UpdatePerson: "kCtImceGgLw5NvQJAldvzVARfvVdZi", 

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