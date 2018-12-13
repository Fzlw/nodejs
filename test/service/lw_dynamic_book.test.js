'use strict';

/**
 * lw_dynamic_book
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_book.js  start...
});

describe('test app/service/lw_dynamic_book.js', () => {

    it('should create a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.create({
            Id: Id,
			BookId: "Ux7e1MBoi4k69Ox", 
			ImgGroupId: "PJI0Yaz9h6UfhzJiz", 
			Content: "kzOIHyjP5sTAaUjEdJchATX9lsUAPWEFEtVW5rdeFfZKbzDW2ca7tHx6ZBs1kDnase9BMIxkG9UG4kEa3n0rSFKsDcuKvODTJrzEESWpaGkt4hUy4zvuDGCtVdI12i6jiNNRu7eVPMh2QaBhkjLisbMYBXKIQkCAgvbnATmLkcsgygIwVRDGZhKoe2PQ2uU0ZSbZb3fnm9MsvPMGwbdxliucR3SvJVkm3TRnELuQZAUifwK86hvlbXLmkK97bgRQ4IRxZtBYbmIEBofdtga5S52hU6KI3isYkdFLJwRQ", 
			Remark: "zthtnpAleF9vAmzFUz9TiYMX9cwFlDKsI4gXpeJWdYrbraLe4izxGuGNhxliK9bNdIBkEgkHuuLAX7i9poGvBw", 
			Province: "zVWpiMZC6BSqv8orPlQLa0qG", 
			City: "OHIhGIoqwOwsRzrLP6Ak7vN8AydLfHMh0p5Z", 
			Valid: 1, 
			CreateTime: "Sun Sep 02 2018 23:48:03 GMT+0800 (CST)", 
			CreatePerson: "Ka42USzpUq75TeVw", 
			UpdateTime: "Fri Oct 05 2018 21:36:15 GMT+0800 (CST)", 
			UpdatePerson: "SoSHZs3n8owLFkYdTEqkKJbjQbCegx0uURsuKy91zsOffevBhcPU0sHswUD0KGp1mQWTSHQ63CtJXQZqIfrEXB3wPEeQvhV24QkD", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicBook.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicBook.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const removeEntity = await ctx.service.lwDynamicBook.remove(entity);
        const updateEntity = await ctx.service.lwDynamicBook.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_book entity', async () => {
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
        const entityList = await ctx.service.lwDynamicBook.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const result = await ctx.service.lwDynamicBook.delete(entity);

        assert(result === 1);
    })

})