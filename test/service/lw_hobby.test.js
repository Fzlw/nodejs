'use strict';

/**
 * lw_hobby
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby.js  start...
});

describe('test app/service/lw_hobby.js', () => {

    it('should create a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.create({
            Id: Id,
			Name: "MG", 
			Describe: "Q5dbpWUBefTVJcBNqv2zXIpa2ii3CVBpBxJ1Epn3kD9xH6m8VMKcBovA76f16IfiQ9T7aOe90nK8O3P1oq5mlu8Bof0sIUKkGIydoDil2Rs03VmhBpHwab1o7L5OITvpAiwowU9rCah7MHG5WdNeUdD75hwRf73cvNPJrLenPpF3u6hV3U8q1Wp8KEMbrQ7cKWEbl51lT46F8cqcPQzdKtJXkjlaCZ8nJA9oeR086hJ8yeit5QGbXA6Lztw5G5ESUWaQ91IhrQwqG0vbergrXhuN6aBJdzLcQ2qaV4ZfsH7PEUJ7IifsAH0eCfUGcjfEmdtzAJMAPZsPLYYVf698juTjiE93N25pkGpFpaxN9dE2TklcriXxzs2VxDetwHeEKTcCvIwZSADjCdLZDzeVkS773sXbMsOYZb6OoT20wqOomHXmP8z57qXajow10ueLFFDKgnuGR98vAD5d9CwVvYPUSIyLmMewesSZ4MJi0S0Q53PxTi1rEvSKY3J2XwHdOZoERXi1Toy3FzZkV1qmGOQW6u", 
			Img: "DcSl2KFKzgzPSimZM2KS3Ik2MYnagNBdMXG4CJSmPdO1pJcfTUktKf", 
			IsSelf: 1, 
			Sort: 4, 
			Valid: 1, 
			CreateTime: "Thu Feb 08 2018 19:30:13 GMT+0800 (CST)", 
			CreatePerson: "sWlpXI5HScHD34jhy2lO8CGE8fzt4Xxw0q6qJunxy94adTPSj9O1e7rj5USR58R30mwQbI1FSxSvKXEV4QmoofYKVOg3D2Hp", 
			UpdateTime: "Wed Jun 13 2018 20:15:28 GMT+0800 (CST)", 
			UpdatePerson: "wSo8r0SN9YjPtryrbzQPvwVTiLAzj3C7PgdFjHbFcPBlLlKlw6rhkLiQvmLQ9swKZCLJ1EIbt82v39JN1B4t49MzF17", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobby.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobby.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const removeEntity = await ctx.service.lwHobby.remove(entity);
        const updateEntity = await ctx.service.lwHobby.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby entity', async () => {
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
        const entityList = await ctx.service.lwHobby.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const result = await ctx.service.lwHobby.delete(entity);

        assert(result === 1);
    })

})