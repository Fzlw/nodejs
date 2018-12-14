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
			UserId: "Q", 
			QQ: "RaGm", 
			Email: "275XlTwrkuiwSecOthdD6VrAyYj0FhbQ4sxOKiZttQgT6zS6GSH38h60SRKe9glZ6NdNO1iG57yQhMnvtlINI", 
			WeChat: "KYLoPu", 
			SinaBlog: "txsKZnFuNlaaJp94i48kMffDYuMQjP2LTbbLxQH6POugJYrf29eIuPEVLllBb8rrnwGeqnlMUvwxJQB1fOmX", 
			BiliBili: "nz9zIRcq6eUISvEJMtfIR7fvFQe0kGUfHTQyyvMnAgRdn0feMKzvevnXY2JpQQTPFlbqyh3EhBnfuhZZcPALZvAT7dkzhQos", 
			GitHub: "1JYBLw5krp4kK60bJ9hxisXsZ3JPoJQhkSJ8UmxuCHfcO", 
			Valid: 1, 
			CreateTime: "Fri Apr 27 2018 22:53:01 GMT+0800 (CST)", 
			CreatePerson: "MuQB42mJ7lwdkDMExSzK2E1LEsqQoBjDCg1rwzsG8jcNtSuCCvh2AGEq5D2l7TRTN7yvTfhlPr4g18Rsiu", 
			UpdateTime: "Sun Nov 18 2018 20:12:52 GMT+0800 (CST)", 
			UpdatePerson: "k0XGlBBVJUImIQiMmaSZsKoANfnR", 

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