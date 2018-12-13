'use strict';

/**
 * syscontactway
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/syscontactway.js  start...
});

describe('test app/service/syscontactway.js', () => {

    it('should create a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.create({
            Id: Id,
			UserId: "oly3lQ2KC6Ts", 
			QQ: "0carAm", 
			Email: "qllvQlNXLM8zCP7VNF6b25vvNgSynIx0EWzHaXvhHwPFNLSmnB5exzxbLAcBtY79LQ1aPm7RlBB1VJGSw6h3gJKxr5MzEt", 
			WeChat: "bqhoOK42Y", 
			SinaBlog: "5", 
			BiliBili: "Y5KBoDqQHZHXZD3lUUiXAZJZ1GtaZf2L3tWUJYI6CgoXP26H7OdyvoStfYyXs0ktzMmNzOzqhoXhGhr59uyotGErfRQsbmC1x", 
			GitHub: "XAfsNngIEoYcDmOvfMRC80bzTVX3XuuxMsONuxVlThoQAUtOmn2gVTolSZVb7EBROe3Ivmi4y3pm", 
			Valid: 1, 
			CreateTime: "Fri Jan 19 2018 17:23:11 GMT+0800 (CST)", 
			CreatePerson: "qWurEAeJJ70dFxwMDFR0IAlNaJ1NWg79yDIv01LIf0FPP7StJ5lGhOQcW238Ax7dumY1uSh1NdiXhK2uRNYzuoSAQfdKDZZCLy7", 
			UpdateTime: "Fri Aug 31 2018 16:09:41 GMT+0800 (CST)", 
			UpdatePerson: "vQK4bYmInNtqZ8k1ojcZ1VrbCw", 

        });
        assert(entity.Id === Id);
    })

    it('should get a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.syscontactway.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.syscontactway.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        const removeEntity = await ctx.service.syscontactway.remove(entity);
        const updateEntity = await ctx.service.syscontactway.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of syscontactway entity', async () => {
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
        const entityList = await ctx.service.syscontactway.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a syscontactway entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.syscontactway.getById(Id);
        const result = await ctx.service.syscontactway.delete(entity);

        assert(result === 1);
    })

})