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
			Name: "oVIkFufTGL8QS8NhA6KyC7xS4nJYKzWFbAkYoOv2WxWUPPit6J", 
			Sex: "k", 
			LandTime: "Fri Aug 03 2018 08:46:33 GMT+0800 (CST)", 
			Position: "hA4GUo1kuVilFeuzYtpapLEsrBYL5BNoIoQZwzKymIB", 
			Valid: 1, 
			CreateTime: "Fri Jul 20 2018 02:43:59 GMT+0800 (CST)", 
			CreatePerson: "ZAOCyhgNalSRZvge7NkstDPMhmiM2vCrSDkKCIb1BKPVfgPOjXZw0Ee2TvP1gNG3g", 
			UpdateTime: "Thu May 03 2018 10:40:26 GMT+0800 (CST)", 
			UpdatePerson: "zgRpzto34dMeC9azAezE6vVUL4hT0LgRTML95ogTXqKlcwsxWQmWQBr7eSEMTjW68yDo2OqJ7660ElUn", 

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