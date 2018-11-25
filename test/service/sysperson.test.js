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
			Name: "ujrb5BmCyDFFhs8TQ", 
			LoginName: "3fYPla", 
			Password: "1U1TiFTOe8p7sa7KTUyyAT2IQnKvn0H0TIak6RRgTZnLOkRQPYfdaoRPcw87xPge4qbcr0Gsr5dmgeyZdbHtfU0MrrZSuufBfVyjck3ZvltZM2BxCPVNuXmWbgNJGPohECnja9LX2dyGo3ePSXqQuS8KcvPDvoerIZNbO1jxCky9qzqq0cCEhmDwuAf37u72SQGHIh45eQaH5ECHwq8JiOIflsV09CIaZcebfMcf", 
			Sex: "c", 
			RegisterTime: "Sat Dec 30 2017 20:04:25 GMT+0800 (CST)", 
			Position: "o5DoZUGzoP63ABJU", 
			HDpic: "1iTEOtQyGgdftQfJm4DvWomqqCOpRNzHo6rQ83QYbdPkAbuKO81IJ41kNVIqpsY5QD82C1ebT8QwS4", 
			ContactWayId: "tmsclQeB7ir", 
			Valid: 1, 
			CreateTime: "Fri Jan 05 2018 10:52:18 GMT+0800 (CST)", 
			CreatePerson: "QMQ2Y77TJ", 
			UpdateTime: "Tue Sep 11 2018 15:52:07 GMT+0800 (CST)", 
			UpdatePerson: "pXa5ckm8GdH1pNlFpf4sRhsQXiagNyHF2vnZeW30glyXmIIcuazTgRmGSm8UmeTn1buyUScs5BtnBGp", 

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