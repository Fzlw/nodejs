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
			Name: "5gOZbxfUimjx", 
			LoginName: "b8Ux36CMATYx13QFIMqijj0b5", 
			Password: "cZ9n1HXKFUt72kGOS9vNVu76HYb3tJk18PbMq93UzCEg9fAcWWrp8YP2g6keGRKkv41G1XwKgb73HhYylcMI7wWrO9JPIKlJ5pUV79W9vgqmnTt1RxiipuKBFvDWIS5HAcbS", 
			Sex: "Y", 
			RegisterTime: "Wed Jul 04 2018 22:41:35 GMT+0800 (CST)", 
			Province: "BcxdBasGVjYHYzrTMEisVvrOw", 
			City: "TLsdbIx7XCAJ1f2yFo5xiQrv6bkaRHmlR60V3vdDBzdLlNfV8IU2qoDD", 
			Introduce: "tXhgaDhpfYMhwztlRKvOcFPl2tyKsJD5g9tgiBj8WqTVsNggJpjSJ7n4BbSGpG3pjf4puNussfluVz3fMlq", 
			Position: "ky53p2ezV0M6sLQD4q240v1KOwqwDtJ26bAl6Yea1", 
			HDpic: "Gricavvncnn7dKg4OWqUOEwbfmSwMRAJUTkfo6bx0xoXsSvOmVzPuXDiSrCsFBHdZvkUrwcvRO6RLU652IITYNwSMQiLMc1DrJp", 
			Valid: 1, 
			CreateTime: "Sun Sep 30 2018 23:52:52 GMT+0800 (CST)", 
			CreatePerson: "UZ19Rozdx9B2nvaJIwabXzD0NTByVXdokzwsZWjYwiUc0uKnwAabWhX6ZxTAMcPlFI", 
			UpdateTime: "Fri Nov 02 2018 01:59:07 GMT+0800 (CST)", 
			UpdatePerson: "TPXYQSQXzmaZs2zwBCRzB", 

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