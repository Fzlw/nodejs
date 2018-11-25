'use strict';

/**
 * __tablename__
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/__tablename__.js  start...
});

describe('test app/service/__tablename__.js', () => {

    it('should create a __tablename__ entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.__ServiceName__.create({
            Id: Id,
__Entity__
        });
        assert(entity.Id === Id);
    })

    it('should get a __tablename__ entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.__ServiceName__.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a __tablename__ entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.__ServiceName__.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.__updateField__ = 'anto-update value';
        const newEntity = await ctx.service.__ServiceName__.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a __tablename__ entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.__ServiceName__.getById(Id);
        const removeEntity = await ctx.service.__ServiceName__.remove(entity);
        const updateEntity = await ctx.service.__ServiceName__.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of __tablename__ entity', async () => {
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
        const entityList = await ctx.service.__ServiceName__.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a __tablename__ entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.__ServiceName__.getById(Id);
        const result = await ctx.service.__ServiceName__.delete(entity);

        assert(result === 1);
    })

})