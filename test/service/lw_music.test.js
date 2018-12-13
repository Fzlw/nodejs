'use strict';

/**
 * lw_music
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_music.js  start...
});

describe('test app/service/lw_music.js', () => {

    it('should create a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.create({
            Id: Id,
			LinkUrl: "9iwl", 
			Singer: "9CfekBpafPkHfg", 
			SongName: "q1dtgO0F1", 
			IsBgMusic: 1, 
			Remark: "F3AoARz4l9VEVSUIfydJeThDFICcsxzKK0uw6mqFWHKOEHl2VDSltzMeYJetUntRNbTQBsJNVehLmL3XHVqT4KEIOzdkCrN", 
			Valid: 1, 
			CreateTime: "Fri Nov 02 2018 09:52:59 GMT+0800 (CST)", 
			CreatePerson: "pL5ouDD53FL96U3ADVxNJayUsRlnASUVDqsG9rJYAL8XNPC2aqRFhcS9FT6pK2XV", 
			UpdateTime: "Thu Nov 08 2018 13:33:30 GMT+0800 (CST)", 
			UpdatePerson: "4DpzX5KWDheKJzyAtNwfIXT2n7BENWVCaMrEZxOwdLmd4jVNQeFRK", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_music entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwMusic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwMusic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        const removeEntity = await ctx.service.lwMusic.remove(entity);
        const updateEntity = await ctx.service.lwMusic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_music entity', async () => {
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
        const entityList = await ctx.service.lwMusic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_music entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMusic.getById(Id);
        const result = await ctx.service.lwMusic.delete(entity);

        assert(result === 1);
    })

})