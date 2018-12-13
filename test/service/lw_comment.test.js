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
			DynamicId: "4T", 
			Comment: "WqUfzNM2zIc3mvDydyuCbQz0mwqGSv0AfPXbKhn4vUvDmPRmmRxog2hYri4Z6H7b5ux7KHJk15SLaHfz5LS4ENayHCkEvOgXrpJwwG0oXKg5koxGYPbSZPw518QBEAxaayrh24uc9eFhYIrV71zQU5YjAx8bjQNo69zNmEGuvYywdEQGhWxaKPACtSu5LbmJovyBWaXIazixjDsI5Qyd7Y6OsY7mKktAjmH05TKWeKnVAGiiSOzNhMvFf8PdSoEh5XQRfYYRK72rfHnyMZ1aMbek3JnRSjysr2pfgAQTtHoCHjr9uEpFSO3i49VjrV0vUdJseFL5YxVoSQMBXOnnCED0YNcVdGvyhrDVVI2S2BanTOSPlXTZNJjH0b2rT8shifLEoZfbgmSjFRnBKJy0il0tP09npxtIz5rIQ7tLLPO08n2cntCuwGZ0Q5VyAdIxkgDzQxDfjGOEQgc2yeItHdiFX5llJpB4BR5jV35aQxVrB0npJ1sMcIihdv5jlYLRnIFRK795IJP4fC84nAdshyNwxZlgrMfHMKiWK2vkC5JO5peZLkG0NUtSB1NCfslOE1ePuxuEpraoWikH7KGcU6SO46uBG444EKjXxOeL9G4GzlZtdEunWsPVkn6CZLDStB8lnqUigkxwBOn57VVesWqBSQy7utOH4MVTgeKYELGd8PHsKc5oiJyxjtmy7x1f9u", 
			VisitorId: "5kuW", 
			Province: "uGeFRivco1A9OOSjJlcvAr", 
			City: "DhwaLqPfjnqZcizawS8T0RAjRDx7EDCoD5Pdx7H56DwTBFLedM2QecH0M0l0ihvVNAP", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Fri May 18 2018 02:25:07 GMT+0800 (CST)", 
			CreatePerson: "sUPDBUDSWNIUhcsvUzgaYikjrw4MY", 
			UpdateTime: "Wed May 23 2018 20:21:13 GMT+0800 (CST)", 
			UpdatePerson: "AkveXYIjxCPgg05Z399C8hiQDGg9PcLZyxoQivJ", 

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