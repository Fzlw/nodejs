'use strict';

/**
 * lw_game
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_game.js  start...
});

describe('test app/service/lw_game.js', () => {

    it('should create a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.create({
            Id: Id,
			DeveloperId: "4MoEYChVRbOtZ0kT", 
			Name: "HjYw4SKnkVboaQOEna", 
			Icon: "iT4FBZty4mOwvyScsDXfiJgpQHrxKaV5Pt2fEtmulfRDeZ7hk9GhqMlJ5TIBwcZOGAhJhqNJuux83olNCb5", 
			Router: "HdVTvrkha6HwilElyu6do7", 
			Sort: 1, 
			Valid: 1, 
			CreateTime: "Sat Dec 23 2017 08:57:22 GMT+0800 (CST)", 
			CreatePerson: "Ykxc4Yqu00rUW5JJDaoS4B5L390T4Pqp2UrdBpU8tWqM6KxaalI9cxQ1yemWvKdqLl", 
			UpdateTime: "Thu Jul 19 2018 18:45:36 GMT+0800 (CST)", 
			UpdatePerson: "hApsbTVJ9zDv", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_game entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwGame.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwGame.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const removeEntity = await ctx.service.lwGame.remove(entity);
        const updateEntity = await ctx.service.lwGame.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_game entity', async () => {
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
        const entityList = await ctx.service.lwGame.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_game entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwGame.getById(Id);
        const result = await ctx.service.lwGame.delete(entity);

        assert(result === 1);
    })

})