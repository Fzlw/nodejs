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
			UserId: "ShWl9a7nLqDba", 
			QQ: "L2dzoZ1s", 
			Email: "ADKuAdHyI9HjkZGTJyh", 
			WeChat: "dD", 
			SinaBlog: "VdcBP9mb9DDJS5MPwB3DsNSy1pr3BxXFgSAJORYrYtYDqiDnDUh5Q2Rxbxi5NP4BTYzH2PYYSDDCdDk21dULQWqdgFmOZ5AFtL", 
			BiliBili: "XGQqhzNX8usyEYe7ZL1EC8y8WnAqeRPnS5rKpD9xnsH0F1N77Zze96BfP25JHnTwNm1OgvMWOaR8frNR", 
			GitHub: "NFjIrzgD6gKXAlY47NnltAN5poqDmOguDpJiTBLjToMfNOuHmJU516evk3tJbVa6iHmZVhN59MBZrNvhv5U2ARoo5", 
			Valid: 1, 
			CreateTime: "Mon Nov 05 2018 21:55:18 GMT+0800 (CST)", 
			CreatePerson: "M0FepzKki7PFj3cLBMiyvUb0K3Rv2JBZBOr0fAeqjn2OLrtjzgjzOM", 
			UpdateTime: "Wed Jul 18 2018 13:28:44 GMT+0800 (CST)", 
			UpdatePerson: "i40VbutRZkXfjRUWgAUmjgF2pgCsghvvE", 

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