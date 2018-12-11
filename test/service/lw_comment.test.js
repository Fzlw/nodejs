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
			DynamicId: "TclGKxG7d", 
			Comment: "fs9VG0FI6eIQgGlTEpI54yL5AuW0y9NvtgBFVBCzVX391YP4KGBNszz3c3TTYant9mKN69JaNzaSq0hiqgLPuCOH94yMq92hkjTqvYzorx1I8g66PZ1bdAeQnNe1ryeY5IaOmYRmSzDV1xiKhTZND5v8xvDRRxSIyc2mdYCZDHp9gQpp7kR3Rm6PMsRIAreHBA5N9CCjGthY0yHhQ6HMaNpaYIvEYYgl4OKJrPwyfynErCbY258vkKPOPPONaY0o8Udq45u1qs1ipi1spY3BTxfBAKto8fE1jZuHJAd8SQuL7M56rd9AP9mSmi56kboEBFUXThFQP2mlHEN62ZhYYp9JZyxKQIDM7QvGNRInOrZDEGk92pKkUGXKpd0B7DMkCu", 
			Position: "K0414vPgZZ2Nsx2LEnLR8Aj", 
			VisitorId: "fqJOL7frWywkLtk", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Mon Nov 05 2018 06:23:41 GMT+0800 (CST)", 
			CreatePerson: "lqRc6U9AOPmVvq60wOY9pEfK4yHCmrZktmZ9LCRLFcgEEasNP", 
			UpdateTime: "Sun May 13 2018 05:29:40 GMT+0800 (CST)", 
			UpdatePerson: "dOzekUHNJNu4fndwcgZx1tOMWn5FLt7dafFJF9BaPMnxxy6T4zmn4zfompHqoa", 

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