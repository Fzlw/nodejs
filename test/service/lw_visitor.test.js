'use strict';

/**
 * lw_visitor
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor.js  start...
});

describe('test app/service/lw_visitor.js', () => {

    it('should create a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.create({
            Id: Id,
			UserTypeId: "dKksESa2DRaB1oT", 
			Name: "SYiPSW241UCdhUPDuRQsrweb9zeDVzFjkk", 
			Mobile: "Xh", 
			Password: "cnGzigVpCUqDwlYawfUMrR90mP0Mu5U31WfnFx4uom7GmPHWyKYBPIUHuwuVbd805N7JZK6grqDXGf8LBCUy1KNhYj7asKhFV8XwWIqAYqnB1zV7IOuFRYa0p2ka94d2D4GTwE1gkF46jWL3a4SBkV9VY5AM", 
			Sex: "D", 
			Province: "Vj2gz6CJBWyxeby9MzRilodutWHpTbrnebyTw1IhUyunuW3aGCY3rhgdH7xEYrJH0VV1EpqzC07FIRWfBD0eiVTeFEu5lB2", 
			City: "EUhQXHObqJGTGnHZczwsFjSly5D8EUKwdA1SsBOdXjSH", 
			LandTime: "Wed Sep 19 2018 23:47:27 GMT+0800 (CST)", 
			IsAuto: 1, 
			Valid: 1, 
			CreateTime: "Sun May 27 2018 00:41:44 GMT+0800 (CST)", 
			CreatePerson: "Riy6koJ7vL5", 
			UpdateTime: "Wed Oct 10 2018 06:47:51 GMT+0800 (CST)", 
			UpdatePerson: "l9c2eugw7Ul4YrBoaMtpzE3ycXWfDw7dTV5JuP6hz2dLhJ", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitor.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitor.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        const removeEntity = await ctx.service.lwVisitor.remove(entity);
        const updateEntity = await ctx.service.lwVisitor.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor entity', async () => {
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
        const entityList = await ctx.service.lwVisitor.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitor.getById(Id);
        const result = await ctx.service.lwVisitor.delete(entity);

        assert(result === 1);
    })

})