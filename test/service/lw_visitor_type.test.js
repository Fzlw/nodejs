'use strict';

/**
 * lw_visitor_type
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_type.js  start...
});

describe('test app/service/lw_visitor_type.js', () => {

    it('should create a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.create({
            Id: Id,
			Name: "iCPTwsDDLmbrv24mx7F3kiqYVtP7nug0dhFskD2u3yl7osrzdsWI", 
			Prefix: "u1zEU", 
			Suffix: "sne", 
			Remark: "vCjqgVgEZzFiHWic9X9solkuytURkA3xYMuI", 
			Valid: 1, 
			CreateTime: "Fri Mar 16 2018 03:52:31 GMT+0800 (CST)", 
			CreatePerson: "0sXT", 
			UpdateTime: "Tue Sep 04 2018 13:37:47 GMT+0800 (CST)", 
			UpdatePerson: "zIPIrXWlstdGz0YhiHZrddRwtK2pROMEmOfUocjJllODGuzrZ191uUfu5jAZwkzBnxyMqZkF", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorType.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorType.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const removeEntity = await ctx.service.lwVisitorType.remove(entity);
        const updateEntity = await ctx.service.lwVisitorType.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_type entity', async () => {
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
        const entityList = await ctx.service.lwVisitorType.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const result = await ctx.service.lwVisitorType.delete(entity);

        assert(result === 1);
    })

})