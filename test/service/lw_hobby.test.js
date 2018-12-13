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
			Name: "ERS17cKjxUFT1vjSJk", 
			Describe: "WZTQB1jyqoLFFXnOd8vQ37besN8JfueazOIvYnFCHUDsQRnCtvOI38XiJd6w8cv3XcOkmMZd9rjgBi5ws83Y6YDJl3BrYabkhv2cBY68OPXEOpPxYLYy9wtQNHucZ8UB6g7OarM7TIqzefKVyLqlf7rH6UYWIQaAOG6b0iCwqXGCmvhSJJYyp8EF6j9zoFUh9qIr8AmGY2N3Olp6BUCxm1Y4hMAOVe7WFNHNs8zcybLE0aps65kDrYKGZsqmnH6wd8LVq1vxTvCoTgCqeRv9w3bmsUlRNLicubCaMDngog5OGJmfCjcgnzezFHDFgfhWnaKWUAG3kvqzwvloryqeDnY07gv4SOnQFjzDTAnMUIgYJR16XEyCQlXOXu01tHn33IgF3XBeWFbW17P7pLcZVSeICFXXZ1SBidVPkig8vawOVxSkJVmnHhHGyx2TdiPdWwcfdqEqr2zk1myzN", 
			Img: "Db9IrpE94NvPC9w4lYEh94rzBgI58", 
			IsSelf: 1, 
			Sort: 9, 
			Valid: 1, 
			CreateTime: "Mon May 14 2018 04:47:34 GMT+0800 (CST)", 
			CreatePerson: "Vi1LUOPjDt45eNISLC9OMFTBZY159oo9bFj6m4p4pi7VTbRYPPcY5sMWyqrmVZmVEycaMPlZcbXVug7Z", 
			UpdateTime: "Wed May 09 2018 08:00:26 GMT+0800 (CST)", 
			UpdatePerson: "upIW0KE0e4WUN4ArNlrvftVwLzDZ8r3DtsF1yMlRJZOnP8DgqtewrL7jzVZy6HL2a3qSVxSEUgNX", 

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