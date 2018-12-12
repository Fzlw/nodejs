'use strict';

/**
 * lw_banner
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_banner.js  start...
});

describe('test app/service/lw_banner.js', () => {

    it('should create a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.create({
            Id: Id,
			GroupId: "1UWb8M", 
			Remark: "z2TJbqGF1pTThaV8aTvyh1t2O2gbjvAKtXB5elwNlLA73jeu7VGZHH3OuOo96gdjFtynXLFU17GHQPasBOAGMQqqRvu", 
			Valid: 1, 
			CreateTime: "Thu Jan 04 2018 19:46:14 GMT+0800 (CST)", 
			CreatePerson: "7IEhpALRqOA1mOeQwuc8lVq4oHR5wllLDFCA2KT0OvOLCjgcP80ocua0k", 
			UpdateTime: "Thu Feb 15 2018 14:11:47 GMT+0800 (CST)", 
			UpdatePerson: "SLLS4BKWCG5DaMMLwVBWhiC1YGauUgfNFB5", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwBanner.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwBanner.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        const removeEntity = await ctx.service.lwBanner.remove(entity);
        const updateEntity = await ctx.service.lwBanner.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_banner entity', async () => {
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
        const entityList = await ctx.service.lwBanner.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_banner entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBanner.getById(Id);
        const result = await ctx.service.lwBanner.delete(entity);

        assert(result === 1);
    })

})