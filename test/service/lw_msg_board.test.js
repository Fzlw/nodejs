'use strict';

/**
 * lw_msg_board
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_msg_board.js  start...
});

describe('test app/service/lw_msg_board.js', () => {

    it('should create a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.create({
            Id: Id,
			UserId: "kdPBNveVAEVdnhl", 
			Content: "L7SQ5DeJRVgkJ0nmaveaix1Tk4Wo6Kkg7HjjkzpaUb71OeuLIGxiiQ9zszz6O2kzo5yNxPe4UNZkVVOF70auCTEMTWn0N3Hu6ikK1yFFMi4s6icDldQBjGfyNAyAe7T0WupnyWqVGhODIvtFPxac9UFj62lCZdqsU8U04e5UL6pMa6ztv2RtbtUYiRedWFvMfOE8Oqb845eLM4IJkPlzO0X60yPXiDkle6ztvKuUH8u7DG91UPyDYu7e1xJ4zUWMK8pjiTGeSfp8yf7mWcOa8xzlWav3vxUH0O1S7qtv2d2pJDhR55AtZJcE60roEzVLQa00OIqKG1f1pntUZUK572esip2vGl5kIdAou4qLGraqX4jiNQe44PkzuvaJ35SyJRDITxXptDbuCRH4eYwtlZGCJzY02AIqj9y3NGA0vLH9tu8nVsOAnisKOBcAMx3NnKdND8oyTNK11EFpBqzhazCDi", 
			Remark: "NNfLMJ5Dx3zCyD8NrETyTeyiGOcn69lXBe9CceKtC0i7B4fyge6Iff1EahBoBp0u0yaRAQpEeSoGCu", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Tue Oct 23 2018 06:06:31 GMT+0800 (CST)", 
			CreatePerson: "uptGN2QbnH9eIHQ3CogsRZgFYFMh0Y7SIDbJyY0CgKasmVaRNUltdPEn4AdA70veEeJm0QrERj4MLXsNsAMiBFji1", 
			UpdateTime: "Sun Aug 05 2018 16:57:18 GMT+0800 (CST)", 
			UpdatePerson: "oaY9yv7CjpCRRGe3EGludFpejUccXypXfU3iDgir8G8iFNpSs2meDq6bQDRq7qlbv5mG9VyBCraMo3", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwMsgBoard.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwMsgBoard.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        const removeEntity = await ctx.service.lwMsgBoard.remove(entity);
        const updateEntity = await ctx.service.lwMsgBoard.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_msg_board entity', async () => {
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
        const entityList = await ctx.service.lwMsgBoard.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        const result = await ctx.service.lwMsgBoard.delete(entity);

        assert(result === 1);
    })

})