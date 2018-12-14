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
			UserId: "KyCtaxvcoxlyxxhELy", 
			Content: "mDocweD32d9uyN3vcJFsWHImXcaXV2inbd554qWo9I1kozuqgAyOYcHm1ula3mZtTDB", 
			Remark: "kwOBHzTnhYKS4V0iMdiAym1K7pCe7j8G4S4B45bN5q9p3ys2pMzcYZT4bejHu0oZpN8Wj1TstCVzedpXFGkJmaFHK", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Mon May 14 2018 06:06:05 GMT+0800 (CST)", 
			CreatePerson: "wEXBXEyXLhlIZWXJWa2n6xUhcnk6hzwwmkcRvoOP56JgwnGVgu7EriIvu3", 
			UpdateTime: "Wed May 16 2018 06:00:41 GMT+0800 (CST)", 
			UpdatePerson: "5B", 

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