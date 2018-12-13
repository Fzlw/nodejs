'use strict';

/**
 * lw_game
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_game.js  start...
});

describe('test app/service/lw_game.js', () => {

    it('should create a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.create({
            Id: Id,
			DeveloperId: "yUauPqK7AmZBt9", 
			Name: "1OMSgsrhXCYmO2GqwFu", 
			Icon: "4T3EQNXHqj2dTC7qccnBDAAfhhB6Gf32pdfPvrd1ACEmVsyisXFTJMFCCmaxOAPbnZe9ADpUac3I3HDRobArm14moZ8eI5i", 
			Router: "e1mApkfEAv5m9OrQB3DIRTkhojzzgsqOHBAZoXPkIZH9cLbw1VnNxhLbY147kZq7qD9597jB01RqkhxjDUcKYcIK8hvbMhk", 
			PassKey: "W0c", 
			Sort: 1, 
			Valid: 1, 
			CreateTime: "Mon Jun 18 2018 04:30:18 GMT+0800 (CST)", 
			CreatePerson: "daGPBrg8fi5K3sR13E0P7bOQ", 
			UpdateTime: "Tue Sep 18 2018 23:05:12 GMT+0800 (CST)", 
			UpdatePerson: "jbUzJRKy3DkfObavrDAGkBL7ecPIbB2bM3MHzsxsiRTh80dZPlfetbOzAMjJ80NcQJdla6WFGi7owbwPAWuVeEouWc", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_game entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwGame.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwGame.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const removeEntity = await ctx.service.lwGame.remove(entity);
        const updateEntity = await ctx.service.lwGame.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_game entity', async () => {
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
        const entityList = await ctx.service.lwGame.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const result = await ctx.service.lwGame.delete(entity);

        assert(result === 1);
    })

})