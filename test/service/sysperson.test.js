'use strict';

/**
 * sysperson
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/sysperson.js  start...
});

describe('test app/service/sysperson.js', () => {

    it('should create a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.create({
            Id: Id,
			Name: "NzYQum3bFlm", 
			LoginName: "P85T3WrHmC", 
			Password: "MjzKMYdLwqjBaIxM5BAER9iASRg5Yf2hA5uyFr1WRspGAB7go8IAG7CCzFPEUXmPb3b7iYGCwzHpVyRP20wvsaRmJbuEU9IjlpfbiRwtEXchwQkPCPH1Kr6AMtIuX5K4YZiH850KXd", 
			Sex: "7", 
			RegisterTime: "Mon Sep 24 2018 06:23:09 GMT+0800 (CST)", 
			Position: "jt4nKBEEncdrzBHrgRuVv", 
			HDpic: "0PObN6SFQMBGCBvk8Ck9aJOKmQpvoYw4FPYk2F3HwhkBid1TFznpJGdL4TaIJqRneHxoHopvyMVsUpIf61a8F0TcAqz", 
			ContactWayId: "06xRle7BrxjQk8Gm", 
			Valid: 1, 
			CreateTime: "Thu Feb 08 2018 12:02:13 GMT+0800 (CST)", 
			CreatePerson: "docRFaXaZS1jN5GLnbdSn2XneX6jMS8XNNZGpm2nZrZryCtMkowZxO6tAUQlX", 
			UpdateTime: "Sat Aug 11 2018 10:11:11 GMT+0800 (CST)", 
			UpdatePerson: "FYhgxk6eGIN7UZPLLKs1Vxk5Ctnolxawfy8yXgMrtEOHZCYyw60YHfSSTKUJ2e9Fy", 

        });
        assert(entity.Id === Id);
    })

    it('should get a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a sysperson entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.sysperson.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.sysperson.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const removeEntity = await ctx.service.sysperson.remove(entity);
        const updateEntity = await ctx.service.sysperson.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of sysperson entity', async () => {
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
        const entityList = await ctx.service.sysperson.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const result = await ctx.service.sysperson.delete(entity);

        assert(result === 1);
    })

})