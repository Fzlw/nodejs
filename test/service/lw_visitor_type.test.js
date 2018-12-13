'use strict';

/**
 * lw_visitor_type
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_type.js  start...
});

describe('test app/service/lw_visitor_type.js', () => {

    it('should create a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.create({
            Id: Id,
			Name: "3YOYuQtImYPX80uv7q22tL1o7N9ROa0C3tzLI2PRBtpn298KXwbCuHe6ZFQMTjoU4IXGNGblxY3Wk4cxkbQP", 
			Prefix: "vfeZE", 
			Suffix: "uMveF", 
			MaxLen: 3, 
			FillByte: "em", 
			Remark: "O8wYMTfeIEWJOBpEP1lREJ36QjkKqf1wGnJ", 
			Valid: 1, 
			CreateTime: "Sat Oct 27 2018 23:59:50 GMT+0800 (CST)", 
			CreatePerson: "GAD85tpuCAJKuoISOMUOu53MGDwXo8a3cFL7rdQJ3fdpv26aPVoJi", 
			UpdateTime: "Thu Jun 28 2018 15:22:25 GMT+0800 (CST)", 
			UpdatePerson: "abLIavTHlTUQjNKroGXlOC6ON5DtTFEMtfGtdD82BlRAfGH8OP7yfLLkLYjATCFzWJZpVqTLXFE", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorType.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorType.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const removeEntity = await ctx.service.lwVisitorType.remove(entity);
        const updateEntity = await ctx.service.lwVisitorType.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_type entity', async () => {
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
        const entityList = await ctx.service.lwVisitorType.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_type entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorType.getById(Id);
        const result = await ctx.service.lwVisitorType.delete(entity);

        assert(result === 1);
    })

})